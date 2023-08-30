import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row, Upload} from "antd";
import ImgCrop from "antd-img-crop";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import TextArea from "antd/es/input/TextArea";

const initialValueForm = {
    nameRu: "",
    nameEg: "",
    image:[],
};



const PostEditService = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId}=useSelector(state => state.editData)
    const dispatch=useDispatch()


    const [fileListProps, setFileListProps] = useState([]);
    const [valuesForm, setValues] = useState({});
    const [isNotEditImages, setIsNotEditImages] = useState(false);
    const [deleteImage, setDeleteImage] = useState({});
    // query-service
    const {
        mutate: postServiceMutate,
        data: postService,
        isLoading: postServiceLoading,
        isSuccess: postServiceSuccess,
        error: postServiceError,
        isError: postServiceIsError
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
        isLoading: editServiceLoading,
        data: editServiceData,
        refetch: editServiceRefetch,
        isSuccess: editServiceSuccess
    } = useQuery(["edit-service", editId], () => apiService.getDataByID("/ProductService", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putService,
        isLoading: putServiceLoading,
        data: putData,
        isSuccess: putServiceSuccess,
        error:putServiceError,
        isError:putServiceIsError
    } = useMutation(({
                         url,
                         data,
                         id
                     }) => apiService.editData(url, data, id));
    // delete-image-query
    const { mutate: imagesDeleteMutate } = useMutation(({ url, id }) => apiService.deleteData(url, id));


    // service success
    useEffect(() => {

        if (putServiceSuccess) {
            dispatch({type:EDIT_DATA,payload:""})
        }
        if (editServiceSuccess && deleteImage?.uid){
            imagesDeleteMutate({ url: "/ProductImage", id: deleteImage?.uid });

        }
        if (postServiceSuccess || putServiceSuccess) {
            navigate('/service')
        }
    }, [postService,putData])

    // category error
    useEffect(() => {
        if (postServiceIsError) {
            message.error(postServiceError.message)
        }
        if (putServiceIsError) {
            message.error(putServiceError.message)
        }
    }, [postServiceError,putServiceError])



    // if edit category
    useEffect(() => {
        if (editId !== "") {
            editServiceRefetch();
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
                uid: editServiceData?.image?.id,
                name: editServiceData?.image?.name,
                status: "done",
                url: `${process.env.REACT_APP_API_URL}/${editServiceData?.image.name}`
            }
        ]
        if (editServiceSuccess){
        const edit={
            nameRu: editServiceData?.nameRu,
            nameEg: editServiceData?.nameEg,
            descriptionRu:editServiceData?.descriptionRu,
            descriptionEg:editServiceData?.descriptionEg,
            images: imageInitial,
        }
            setFileListProps(imageInitial)
            form.setFieldsValue(edit)
        }
    },[editServiceData])


    // post category
    useEffect(() => {

        let imageId = null
        if (editServiceSuccess && imagesUploadSuccess) {
            imageId = imagesUpload?.id
        } else if (editServiceSuccess && !imagesUploadSuccess) {
            imageId = fileListProps[0]?.uid
        }
        const data = {
            nameRu: valuesForm.nameRu,
            nameEg: valuesForm.nameEg,
            descriptionRu:valuesForm?.descriptionRu,
            descriptionEg:valuesForm?.descriptionEg,
            imageId: editServiceSuccess ? imageId : imagesUpload?.id,
        };


        if (imagesUploadSuccess && !editServiceSuccess) {
            postServiceMutate({url: "/ProductService", data});
        } else if ( isNotEditImages ||imagesUploadSuccess){
            putService({url:'/ProductService',data,id:editId})
        }

    }, [imagesUpload, valuesForm]);

    const onFinish = (values) => {
        const formData = new FormData();

        let uploadNewImage=false

        if (editServiceSuccess) {
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
        console.log(errorInfo);
    };
    const onChange = ({fileList: newFileList}) => {
        setFileListProps(newFileList);
        form.setFieldsValue({images: newFileList})
    };

    const handleRemoveImage = (file) => {
        if (editServiceSuccess) {
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
        localStorage.removeItem('myFormValues')
        localStorage.removeItem('editDataId')
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
            {(imagesUploadLoading || postServiceLoading ||editServiceLoading ||putServiceLoading) ?
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
                                label="Service name En"
                                name="nameEg"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Service En!"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Название баннера Ru"
                                name="nameRu"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your услуга Ru!"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>

                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Descriptoin name En"
                                name="descriptionEg"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Descriptoin En!"
                                    }
                                ]}
                            >
                                <TextArea rows={4}/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Название описания Ru"
                                name="descriptionRu"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Descriptoin Ru!"
                                    }
                                ]}
                            >
                                <TextArea rows={4}/>
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
                                maxCount={5}
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
                            editServiceSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default PostEditService;