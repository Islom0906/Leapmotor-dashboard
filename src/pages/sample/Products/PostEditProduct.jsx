import {useEffect, useMemo, useState} from 'react';
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Upload,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ImgCrop from 'antd-img-crop';
import {useMutation, useQuery} from 'react-query';
import apiService from '../../../@crema/services/apis/api';
import {AppLoader} from '../../../@crema';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {EDIT_DATA} from '../../../shared/constants/ActionTypes';

const initialValueForm = {
  nameRu: '',
  nameEg: '',
  price: null,
  opisaniyaRu: '',
  opisaniyaEg: '',
  image: [],
  productTypeId: null,
  priceSkitka: null,
};

const PostEditProduct = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {editId} = useSelector((state) => state.editData);
  const dispatch = useDispatch();


  const [fileListProps, setFileListProps] = useState([]);
  const [valuesForm, setValues] = useState({});
  const [isNotEditImages, setIsNotEditImages] = useState(false);
  const [deleteImage, setDeleteImage] = useState({});


  
  //                                           ===React-Query===
  // query-category
  const {data: categoryData, refetch: categoryFetch} = useQuery(
    'get-categories',
    () => apiService.getData('/ProductType'),
    {
      enabled: false,
    },
  );


  // query-product
  const {
    mutate: postProductMutate,
    data: postProduct,
    isLoading: postProductLoading,
    isSuccess: postProductSuccess,
    error: postProductError,
    isError: postProductIsError,
  } = useMutation(({url, data}) => apiService.postData(url, data),{
    onError: (error) => {
      const err=[]

      for (const property in error?.response?.data?.errors){
        err.push(error?.response?.data?.errors[property])
        
      }
      

      message.error(err[0][0]);
      // Handle the error
    },
  });
  // query-image
  const {
    mutate: imagesUploadMutate,
    data: imagesUpload,
    isLoading: imagesUploadLoading,
    isSuccess: imagesUploadSuccess,
  } = useMutation(({url, formData}) => apiService.postData(url, formData),{
    onError: (error) => {
      const err=[]

      for (const property in error?.response?.data?.errors){
        err.push(error?.response?.data?.errors[property])
        
      }
      

      message.error(err[0][0]);
      // Handle the error
    },
  });
  // query-edit
  const {
    isLoading: editProductLoading,
    data: editProductData,
    refetch: editProductRefetch,
    isSuccess: editProductSuccess,
  } = useQuery(
    ['edit-product', editId],
    () => apiService.getDataByID('/Product', editId),
    {
      enabled: false,
    },
  );
  // put-query
  const {
    mutate: putProduct,
    isLoading: putProductLoading,
    data: putData,
    isSuccess: putProductSuccess,
    error: putProductError,
    isError: putProductIsError,
  } = useMutation(({url, data, id}) => apiService.editData(url, data, id),{
    onError: (error) => {
      const err=[]

      for (const property in error?.response?.data?.errors){
        err.push(error?.response?.data?.errors[property])
        
      }
      

      message.error(err[0][0]);
      // Handle the error
    },
  });
  // delete-image-query
  const {mutate: imagesDeleteMutate} = useMutation(({url, id}) =>
    apiService.deleteData(url, id),
  );

  //                                           ===UseEffect===
  // product success
  useEffect(() => {

    if (putProductSuccess) {
      dispatch({type: EDIT_DATA, payload: ''});
    }
    if (editProductSuccess && deleteImage?.uid) {
      imagesDeleteMutate({url: '/ProductImage', id: deleteImage?.uid});
    }
    if (postProductSuccess || putProductSuccess) {
      navigate('/product');
     

    }
  }, [postProduct, putData]);

  // product error
  useEffect(() => {
    if (postProductIsError) {
      message.error(postProductError.message);
    }
    if (putProductIsError) {
      message.error(putProductError.message);
    }
  }, [postProductError, putProductError]);

  // if edit product
  useEffect(() => {
    if (editId !== '') {
      editProductRefetch();
    }
  }, [editId]);

  // if no edit product
  useEffect(() => {
    if (editId === '') {
      form.setFieldsValue(initialValueForm);
    }
    categoryFetch();
  }, []);

  //edit product
  useEffect(() => {
    const imageInitial = [
      {
        uid: editProductData?.image?.id,
        name: editProductData?.image?.name,
        status: 'done',
        url: `${process.env.REACT_APP_API_URL}/${editProductData?.image.name}`,
      },
    ];
    if (editProductSuccess) {
      const edit = {
        nameRu: editProductData?.nameRu,
        nameEg: editProductData?.nameEg,
        price: editProductData?.price,
        opisaniyaRu: editProductData?.opisaniyaRu,
        opisaniyaEg: editProductData?.opisaniyaEg,
        images: imageInitial,
        productTypeId: editProductData?.productTypeId,
        priceSkitka: editProductData?.priceSkitka,
      };
      setFileListProps(imageInitial);
      form.setFieldsValue(edit);
    }
  }, [editProductData]);

  // post product
  useEffect(() => {
    let imageId = null;
    if (editProductSuccess && imagesUploadSuccess) {
      imageId = imagesUpload?.id;
    } else if (editProductSuccess && !imagesUploadSuccess) {
      imageId = fileListProps[0]?.uid;
    }
    const data = {
      nameRu: valuesForm.nameRu,
      nameEg: valuesForm.nameEg,
      price: valuesForm.price,
      opisaniyaRu: valuesForm.opisaniyaRu,
      opisaniyaEg: valuesForm.opisaniyaEg,
      imageId: editProductSuccess ? imageId : imagesUpload?.id,
      productTypeId: valuesForm.productTypeId,
      priceSkitka: valuesForm.priceSkitka === null ? 0 : valuesForm.priceSkitka,
    };

    if (imagesUploadSuccess && !editProductSuccess) {
      postProductMutate({url: '/Product', data});
    } else if (isNotEditImages || imagesUploadSuccess) {
      putProduct({url: '/Product', data, id: editId});
    }
  }, [imagesUpload, valuesForm]);

  // refresh page again get data

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
    if (storedValues) {
        storedValues.images=[]
      form.setFieldsValue(storedValues);
    }

    const handleBeforeUnload = () => {
        
            localStorage.setItem(
              'myFormValues',
              JSON.stringify(form.getFieldsValue()),
            );
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return ()=>{
      localStorage.removeItem('editDataId')
      localStorage.removeItem('myFormValues')
        window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, []);

  // render category
  const options = useMemo(() => {
    return categoryData?.map((option) => {
      return {
        value: option?.id,
        label: option?.nameEg,
      };
    });
  }, [categoryData]);

  const onFinish = (values) => {
    const formData = new FormData();

    let uploadNewImage = false;

    if (editProductSuccess) {
      if (fileListProps[0]?.originFileObj?.uid) {
        uploadNewImage = true;
        formData.append('formFile', fileListProps[0]?.originFileObj);

        setIsNotEditImages(false);
      } else {
        uploadNewImage = false;
        setIsNotEditImages(true);
      }
    } else {
      uploadNewImage = true;
      formData.append('formFile', fileListProps[0]?.originFileObj);
    }
    if (uploadNewImage && !imagesUploadSuccess) {
      imagesUploadMutate({url: '/ProductImage', formData});
    }

    setValues(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = ({fileList: newFileList}) => {
    setFileListProps(newFileList);
    form.setFieldsValue({images: newFileList});
    
  };

  const handleRemoveImage = (file) => {
    if (editProductSuccess) {
      setDeleteImage(file);
     
    }
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  return (
    <div>
      {imagesUploadLoading ||
      postProductLoading ||
      editProductLoading ||
      putProductLoading ? (
        <AppLoader />
      ) : (
        <Form
          form={form}
          name='basic'
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: '100%',
          }}
          initialValues={initialValueForm}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                label='Product name En'
                name='nameEg'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Name En!',
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Наименование товара Ru'
                name='nameRu'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Name Ru!',
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                label='Descriptoin name En'
                name='opisaniyaEg'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Descriptoin En!',
                  },
                ]}>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Название описания Ru'
                name='opisaniyaRu'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Descriptoin Ru!',
                  },
                ]}>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label={'Select a category'}
            name={'productTypeId'}
            wrapperCol={{
              span: 24,
            }}
            rules={[
              {required: true, message: 'Please selected your Category'},
            ]}>
            <Select
              style={{
                width: '100%',
              }}
              placeholder='Select one category'
              optionLabelProp='label'
              options={options}
            />
          </Form.Item>
          <Form.Item
            label='Rasm yuklang'
            name={'images'}
            rules={[{required: true, message: 'Please upload images'}]}>
            <ImgCrop rotationSlider>
              <Upload
                maxCount={5}
                fileList={fileListProps}
                listType='picture-card'
                onChange={onChange}
                onPreview={onPreview}
                beforeUpload={() => false}
                onRemove={handleRemoveImage}>
                {fileListProps?.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                label='Price'
                name='price'
                rules={[
                  {
                    required: true,
                    message: 'Please input your product price!',
                  },
                ]}>
                <InputNumber style={{width: '100%'}} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Discount Price' name='priceSkitka'>
                <InputNumber style={{width: '100%'}} />
              </Form.Item>
            </Col>
          </Row>
          <Button type='primary' htmlType='submit' style={{width: '100%'}}>
            {editProductSuccess ? 'Edit' : 'Add'}
          </Button>
        </Form>
      )}
    </div>
  );
};

export default PostEditProduct;
