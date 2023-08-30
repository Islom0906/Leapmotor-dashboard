import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Select, Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import {useMutation, useQuery} from 'react-query';
import apiService from '../../../@crema/services/apis/api';
import {AppLoader} from '../../../@crema';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {EDIT_DATA} from '../../../shared/constants/ActionTypes';
import TextArea from 'antd/es/input/TextArea';

const initialValueForm = {
  nameRu: '',
  nameEg: '',
  image: [],
};

const options = [
  {
    value: 1,
    label: 'Banner 1',
  },
  {
    value: 2,
    label: 'Banner 2',
  },
  {
    value: 3,
    label: 'Banner 3',
  },
  {
    value: 4,
    label: 'Advertising',
  },
];

const PostEditBanner = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {editId} = useSelector((state) => state.editData);
  const dispatch = useDispatch();

  const [fileListProps, setFileListProps] = useState([]);
  const [valuesForm, setValues] = useState({});
  const [isNotEditImages, setIsNotEditImages] = useState(false);
  const [deleteImage, setDeleteImage] = useState({});
  // query-banner
  const {
    mutate: postBannerMutate,
    data: postBanner,
    isLoading: postBannerLoading,
    isSuccess: postBannerSuccess,
    error: postBannerError,
    isError: postBannerIsError,
  } = useMutation(({url, data}) => apiService.postData(url, data));
  // query-image
  const {
    mutate: imagesUploadMutate,
    data: imagesUpload,
    isLoading: imagesUploadLoading,
    isSuccess: imagesUploadSuccess,
  } = useMutation(({url, formData}) => apiService.postData(url, formData));
  // query-edit
  const {
    isLoading: editBannerLoading,
    data: editBannerData,
    refetch: editBannerRefetch,
    isSuccess: editBannerSuccess,
  } = useQuery(
    ['edit-banner', editId],
    () => apiService.getDataByID('/Banner', editId),
    {
      enabled: false,
    },
  );
  // put-query
  const {
    mutate: putBanner,
    isLoading: putBannerLoading,
    data: putData,
    isSuccess: putBannerSuccess,
    error: putBannerError,
    isError: putBannerIsError,
  } = useMutation(({url, data, id}) => apiService.editData(url, data, id));
  // delete-image-query
  const {mutate: imagesDeleteMutate} = useMutation(({url, id}) =>
    apiService.deleteData(url, id),
  );

  // category success
  useEffect(() => {
    if (putBannerSuccess) {
      dispatch({type: EDIT_DATA, payload: ''});
    }
    if (editBannerSuccess && deleteImage?.uid) {
      imagesDeleteMutate({url: '/ProductImage', id: deleteImage?.uid});
    }
    if (postBannerSuccess || putBannerSuccess) {
     
      navigate('/banner');
    }
  }, [postBanner, putData]);

  // category error
  useEffect(() => {
    if (postBannerIsError) {
      message.error(postBannerError.message);
    }
    if (putBannerIsError) {
      message.error(putBannerError.message);
    }
  }, [postBannerError, putBannerError]);

  // if edit category
  useEffect(() => {
    if (editId !== '') {
      editBannerRefetch();
    }
  }, [editId]);

  // if no edit category
  useEffect(() => {
    if (editId === '') {
      form.setFieldsValue(initialValueForm);
    }
  }, []);

  //edit category
  useEffect(() => {
    const imageInitial = [
      {
        uid: editBannerData?.image?.id,
        name: editBannerData?.image?.name,
        status: 'done',
        url: `${process.env.REACT_APP_API_URL}/${editBannerData?.image.name}`,
      },
    ];
    if (editBannerSuccess) {
      const edit = {
        nameRu: editBannerData?.nameRu,
        nameEg: editBannerData?.nameEg,
        descriptionRu: editBannerData?.descriptionRu,
        descriptionEg: editBannerData?.descriptionEg,
        images: imageInitial,
        bannerId: editBannerData.bannerId,
      };
      setFileListProps(imageInitial);
      form.setFieldsValue(edit);
    }
  }, [editBannerData]);

  // post category
  useEffect(() => {
    let imageId = null;
    if (editBannerSuccess && imagesUploadSuccess) {
      imageId = imagesUpload?.id;
    } else if (editBannerSuccess && !imagesUploadSuccess) {
      imageId = fileListProps[0]?.uid;
    }
    const data = {
      nameRu: valuesForm.nameRu,
      nameEg: valuesForm.nameEg,
      descriptionRu: valuesForm?.descriptionRu,
      descriptionEg: valuesForm?.descriptionEg,
      imageId: editBannerSuccess ? imageId : imagesUpload?.id,
      bannerId: valuesForm?.bannerId,
    };


    if (imagesUploadSuccess && !editBannerSuccess) {
      postBannerMutate({url: '/Banner', data});
    } else if (isNotEditImages || imagesUploadSuccess) {
      putBanner({url: '/Banner', data, id: editId});
    }
  }, [imagesUpload, valuesForm]);

  const onFinish = (values) => {
    const formData = new FormData();

    let uploadNewImage = false;

    if (editBannerSuccess) {
      if (fileListProps[0]?.originFileObj?.uid) {
        uploadNewImage = true;
        formData.append('formFile', fileListProps[0]?.originFileObj);

        setIsNotEditImages(false);
        // setFileList(fileListProps);
      } else {
        uploadNewImage = false;
        // setFileList(fileListProps);
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
    if (editBannerSuccess) {
      setDeleteImage(file);
    }
  };

  // refresh page again get data

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
    if (storedValues) {
      storedValues.images = [];
      form.setFieldsValue(storedValues);
    }

    const handleBeforeUnload = () => {
      localStorage.setItem(
        'myFormValues',
        JSON.stringify(form.getFieldsValue()),
      );
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
        localStorage.removeItem('editDataId');
        localStorage.removeItem('myFormValues');
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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

  return (
    <div>
      {imagesUploadLoading ||
      postBannerLoading ||
      editBannerLoading ||
      putBannerLoading ? (
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
                label='Banner name En'
                name='nameEg'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Banner En!',
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Название баннера Ru'
                name='nameRu'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Banner Ru!',
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
                name='descriptionEg'
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
                name='descriptionRu'
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
            name={'bannerId'}
            wrapperCol={{
              span: 24,
            }}
            rules={[
              {required: true, message: 'Please selected your Map'},
            ]}>
            <Select
              style={{
                width: '100%',
              }}
              placeholder='Select one banner'
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
                {fileListProps.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Button type='primary' htmlType='submit' style={{width: '100%'}}>
            {editBannerSuccess ? 'Edit' : 'Add'}
          </Button>
        </Form>
      )}
    </div>
  );
};

export default PostEditBanner;
