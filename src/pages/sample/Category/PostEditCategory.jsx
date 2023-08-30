import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Upload} from "antd";
import ImgCrop from "antd-img-crop";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";

const initialValueForm = {
    nameRu: "",
    nameEg: "",
    image:[],
};



const PostEditCategory = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId}=useSelector(state => state.editData)
    const dispatch=useDispatch()


    const [fileListProps, setFileListProps] = useState([]);
    const [valuesForm, setValues] = useState({});
    const [isNotEditImages, setIsNotEditImages] = useState(false);
    const [deleteImage, setDeleteImage] = useState({});
    // query-category
    const {
        mutate: postCategoryMutate,
        data: postCategory,
        isLoading: postCategoryLoading,
        isSuccess: postCategorySuccess,
        error: postCategoryError,
        isError: postCategoryIsError
    } = useMutation(({url, data}) => apiService.postData(url, data));
    // query-image
    const {
        mutate: imagesUploadMutate,
        data: imagesUpload,
        isLoading: imagesUploadLoading,
        isSuccess: imagesUploadSuccess
    } = useMutation(({url, formData}) => apiService.postData(url, formData));
    // query-edit
    const {
        isLoading: editCategoryLoading,
        data: editCategoryData,
        refetch: editCategoryRefetch,
        isSuccess: editCategorySuccess,
        error:putCategoryError,
        isError:putCategoryIsError
    } = useQuery(["edit-category", editId], () => apiService.getDataByID("/ProductType", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putCategory,
        isLoading: putCategoryLoading,
        data: putData,
        isSuccess: putCategorySuccess
    } = useMutation(({
                         url,
                         data,
                         id
                     }) => apiService.editData(url, data, id));
    // delete-image-query
    const { mutate: imagesDeleteMutate } = useMutation(({ url, id }) => apiService.deleteData(url, id));


    // category success
    useEffect(() => {
        if (putCategorySuccess) {
            dispatch({type:EDIT_DATA,payload:""})
        }
        if (editCategorySuccess && deleteImage?.uid){
            imagesDeleteMutate({ url: "/ProductImage", id: deleteImage?.uid });

        }
        if (postCategorySuccess || putCategorySuccess) {
      
            navigate('/category')
        }
    }, [postCategory,putData])

    // category error
    useEffect(() => {
        if (postCategoryIsError) {
            message.error(postCategoryError.message)
        }
        if (putCategoryIsError) {
            message.error(putCategoryError.message)
        }
    }, [postCategoryError,putCategoryError])



    // if edit category
    useEffect(() => {
        if (editId !== "") {
            editCategoryRefetch();
        }
    }, [editId]);

    // if no edit category
    useEffect(() => {
        if (editId===""){
            form.setFieldsValue(initialValueForm)
        }
    }, []);




    //edit category
    useEffect(()=>{
        const imageInitial=[
            {
                uid: editCategoryData?.image?.id,
                name: editCategoryData?.image?.name,
                status: "done",
                url: `${process.env.REACT_APP_API_URL}/${editCategoryData?.image.name}`
            }
        ]
        if (editCategorySuccess){
        const edit={
            nameRu: editCategoryData?.nameRu,
            nameEg: editCategoryData?.nameEg,
            images: imageInitial,
        }
            setFileListProps(imageInitial)
            form.setFieldsValue(edit)
        }
    },[editCategoryData])


    // post category
    useEffect(() => {

        let imageId = null
        if (editCategorySuccess && imagesUploadSuccess) {
            imageId = imagesUpload?.id
        } else if (editCategorySuccess && !imagesUploadSuccess) {
            imageId = fileListProps[0]?.uid
        }
        const data = {
            nameRu: valuesForm.nameRu,
            nameEg: valuesForm.nameEg,
            imageId: editCategorySuccess ? imageId : imagesUpload?.id,
        };


        if (imagesUploadSuccess && !editCategorySuccess) {
            postCategoryMutate({url: "/ProductType", data});
        } else if (isNotEditImages ||  imagesUploadSuccess){
            putCategory({url:'/ProductType',data,id:editId})
        }

    }, [imagesUpload,valuesForm]);

    const onFinish = (values) => {
        const formData = new FormData();
        let uploadNewImage=false

        if (editCategorySuccess) {
            if (fileListProps[0]?.originFileObj?.uid) {
                uploadNewImage=true
                formData.append("formFile", fileListProps[0]?.originFileObj);

                setIsNotEditImages(false);
                // setFileList(fileListProps);
            } else {
                uploadNewImage=false
                // setFileList(fileListProps);
                setIsNotEditImages(true);
            }
        } else {
            uploadNewImage=true
            formData.append("formFile", fileListProps[0]?.originFileObj);

        }
        if (uploadNewImage && !imagesUploadSuccess) {
            imagesUploadMutate({url: "/ProductImage", formData});
        }


        setValues(values);
    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const onChange = ({fileList: newFileList}) => {
        setFileListProps(newFileList);
        form.setFieldsValue({images: newFileList})
    };

    const handleRemoveImage = (file) => {
        if (editCategorySuccess) {
            setDeleteImage(file)
        }
    };

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
            {(imagesUploadLoading || postCategoryLoading ||editCategoryLoading ||putCategoryLoading) ?
                <AppLoader/> :
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 24
                    }}
                    wrapperCol={{
                        span: 24
                    }}
                    style={{
                        maxWidth: "100%"
                    }}
                    initialValues={initialValueForm}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Category name En"
                                name="nameEg"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Category En!"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Название категории на Ru"
                                name="nameRu"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Category Ru!"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>

                    </Row>

                    <Form.Item
                        label="Rasm yuklang"
                        name={"images"}
                        rules={[
                            {required: true, message: "Please upload images"}
                        ]}
                    >
                        <ImgCrop rotationSlider>


                            <Upload
                                maxCount={1}
                                fileList={fileListProps}
                                listType="picture-card"
                                onChange={onChange}
                                onPreview={onPreview}
                                beforeUpload={() => false}
                                onRemove={handleRemoveImage}
                            >

                                {fileListProps.length < 1 && "+ Upload"}
                            </Upload>
                        </ImgCrop>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                    {
                            editCategorySuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default PostEditCategory;