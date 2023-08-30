import React, {useEffect, useState} from 'react';
import {Button,  Form, Input, message, Upload} from "antd";
import ImgCrop from "antd-img-crop";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";

const initialValueForm = {
    link: "",
    images:[],
};



const PostEditPartner = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId}=useSelector(state => state.editData)
    const dispatch=useDispatch()


    const [fileListProps, setFileListProps] = useState([]);
    const [valuesForm, setValues] = useState({});
    const [isNotEditImages, setIsNotEditImages] = useState(false);
    const [deleteImage, setDeleteImage] = useState({});
    // query-product
    const {
        mutate: postPartnerMutate,
        data: postPartner,
        isLoading: postPartnerLoading,
        isSuccess: postPartnerSuccess,
        error: postPartnerError,
        isError: postPartnerIsError
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
        isLoading: editPartnerLoading,
        data: editPartnerData,
        refetch: editPartnerRefetch,
        isSuccess: editPartnerSuccess
    } = useQuery(["edit-partner", editId], () => apiService.getDataByID("/Parknyor", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putPartner,
        isLoading: putPartnerLoading,
        data: putData,
        isSuccess: putPartnerSuccess,
        error:putPartnerError,
        isError:putPartnerIsError
    } = useMutation(({
                         url,
                         data,
                         id
                     }) => apiService.editData(url, data, id));
    // delete-image-query
    const { mutate: imagesDeleteMutate } = useMutation(({ url, id }) => apiService.deleteData(url, id));


    // partner success
    useEffect(() => {

        if (putPartnerSuccess) {
            dispatch({type:EDIT_DATA,payload:""})
        }
        if (editPartnerSuccess && deleteImage?.uid){
            imagesDeleteMutate({ url: "/ProductImage", id: deleteImage?.uid });

        }
        if (postPartnerSuccess || putPartnerSuccess ) {
            

            navigate('/partner')
        }
        setDeleteImage({})
    }, [postPartner,putData])




    // partner error
    useEffect(() => {
        if (postPartnerIsError) {
            message.error(postPartnerError.message)
        }
        if (putPartnerIsError   ) {
            message.error(putPartnerError.message)
        }
    }, [postPartnerError,putPartnerError])



    // if edit partner
    useEffect(() => {
        if (editId !== "") {
            editPartnerRefetch();
        }
    }, [editId]);

    // if no edit partner
    useEffect(() => {
        if (editId===""){
            form.setFieldsValue(initialValueForm)
        }
    }, []);




    //edit partner
    useEffect(()=>{
        const imageInitial=[
            {
                uid: editPartnerData?.image?.id,
                name: editPartnerData?.image?.name,
                status: "done",
                url: `${process.env.REACT_APP_API_URL}/${editPartnerData?.image.name}`
            }
        ]
        if (editPartnerSuccess){
        const edit={
            link:editPartnerData?.link,
            images: imageInitial,
        }
            setFileListProps(imageInitial)
            form.setFieldsValue(edit)
        }
    },[editPartnerData])


    // post partner
    useEffect(() => {

        let imageId = null
        if (editPartnerSuccess && imagesUploadSuccess) {
            imageId = imagesUpload?.id
        } else if (editPartnerSuccess && !imagesUploadSuccess) {
            imageId = fileListProps[0]?.uid
        }
        const data = {
            link: valuesForm?.link,
            imageId: editPartnerSuccess ? imageId :  imagesUpload?.id,
        };


        if (imagesUploadSuccess && !editPartnerSuccess) {
            postPartnerMutate({url: "/Parknyor", data});
        }
        else if (isNotEditImages ||  imagesUpload) {
            putPartner({url:'/Parknyor',data,id:editId})
        }

    }, [imagesUpload, valuesForm]);

    const onFinish = (values) => {
        const formData = new FormData();

        let uploadNewImage=false

        if (editPartnerSuccess) {
            if (fileListProps[0]?.originFileObj) {
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
        if (editPartnerSuccess) {
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
            {(imagesUploadLoading || postPartnerLoading ||editPartnerLoading ||putPartnerLoading) ?
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
                    <Form.Item
                        label="Partner Link"
                        name="link"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Link!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

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
                            editPartnerSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default PostEditPartner;