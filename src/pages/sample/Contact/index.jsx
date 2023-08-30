import React  from 'react';
import ContactTable from "./ContactTable";
import {Button, Col, Input, message, Row, Space, Spin} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import apiService from "../../../@crema/services/apis/api";
import { useQuery} from "react-query";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useDispatch} from "react-redux";


const Index = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {data, isLoading: getContactLoading} = useQuery('contact-get', () =>
            apiService.getData('/Contact'), {
            // enabled:false,
            onError: (error) => {
                message.error(error.message);
                // Handle the error
            },
        }
    );





    const addArticle = () => {
        dispatch({type: EDIT_DATA, payload: ""})
        navigate('/category/add')
    }

    return (
        <div className={'site-space-compact-wrapper'}>
            <Space direction={'vertical'} style={{width: '100%'}}>
                <Row gutter={20}>
                    <Col span={16}>
                        <Input/>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" disabled={true} icon={<PlusOutlined/>} style={{width: '100%'}} onClick={addArticle}>
                            Add
                        </Button>
                    </Col>
                </Row>
                <Spin size='medium' spinning={getContactLoading }>
                    <ContactTable data={data} />
                </Spin>
            </Space>


        </div>
    );
};

export default Index;