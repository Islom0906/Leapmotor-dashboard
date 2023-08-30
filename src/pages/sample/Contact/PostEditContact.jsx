import React, {useEffect} from 'react';
import {Button, Col, Form, Input, message, Row} from "antd";

import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";

const initialValueForm = {
    instagram: "",
    telegram: "",
    watsap: "",
    email: "",
    phone: ""
};



const PostEditContact = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId}=useSelector(state => state.editData)
    const dispatch=useDispatch()




    // query-category
    // const {
    //     mutate: postCategoryMutate,
    //     data: postCategory,
    //     isLoading: postCategoryLoading,
    //     isSuccess: postCategorySuccess,
    //     error: postCategoryError,
    //     isError: postCategoryIsError
    // } = useMutation(({url, data}) => apiService.postData(url, data));
    // query-image
    // const {
    //     mutate: imagesUploadMutate,
    //     data: imagesUpload,
    //     isLoading: imagesUploadLoading,
    //     isSuccess: imagesUploadSuccess
    // } = useMutation(({url, formData}) => apiService.postData(url, formData));
    // query-edit
    const {
        isLoading: editContactLoading,
        data: editContactData,
        refetch: editContactRefetch,
        isSuccess: editContactSuccess,
        error: putContactError,
            isError: putContactIsError
    } = useQuery(["edit-contact"], () => apiService.getData("/Contact"), {
        enabled: false
    });
    // put-query
    const {
        mutate: putContact,
        isLoading: putContactLoading,
        data: putData,
        isSuccess: putContactSuccess
    } = useMutation(({
                         url,
                         data,
                         id
                     }) => apiService.editData(url, data, id));
    // delete-image-query
    // const { mutate: imagesDeleteMutate } = useMutation(({ url, id }) => apiService.deleteData(url, id));

    // Contact success
    useEffect(() => {
        if (putContactSuccess) {
            navigate('/contact')
        localStorage.removeItem('editDataId')

        }
        if (putContactSuccess) {
            dispatch({type:EDIT_DATA,payload:""})
        }
    }, [putData])

    // Contact error
    useEffect(() => {
        if (putContactIsError) {
            message.error(putContactError.message)
        }
    }, [putContactError])



    // if edit Contact
    useEffect(() => {
        if (editId !== "") {
            editContactRefetch();
        }
    }, [editId]);

    // if no edit Contact
    useEffect(() => {
        if (editId===""){
            form.setFieldsValue(initialValueForm)
        }
    }, []);




    //edit Contact
    useEffect(()=>{
        if (editContactSuccess){
        const edit={
            instagram: editContactData[0]?.instagram,
            telegram: editContactData[0]?.telegram,
            watsap: editContactData[0]?.watsap,
            email: editContactData[0]?.email,
            phone: editContactData[0]?.phone
        }
            form.setFieldsValue(edit)
        }
    },[editContactData])


   

    const onFinish = (values) => {
        putContact({url:'/Contact',data:values,id:""})
    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    return (
        <div>
            {(editContactLoading ||putContactLoading) ?
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
                                label="Instagram"
                                name="instagram"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Instagram!"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Telegram"
                                name="telegram"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Telegram!"
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
                                label="Whatsapp"
                                name="watsap"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Whatsapp!"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Facebook"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input Facebook!"
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                        </Col>

                    </Row>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Phone!"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                        Edit
                    </Button>
                </Form>
            }
        </div>
    );
};

export default PostEditContact;