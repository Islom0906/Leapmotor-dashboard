import React, {useEffect, useState} from 'react';
import ServiceTable from "./ServiceTable";
import {Button, Col, Input, message, Row, Space, Spin} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import apiService from "../../../@crema/services/apis/api";
import {useMutation, useQuery} from "react-query";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useDispatch} from "react-redux";


const Index = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {mutate, isSuccess, isLoading: deleteServiceLoading} = useMutation(({
                                                                                  url,
                                                                                  id
                                                                              }) => apiService.deleteData(url, id))
    const {data, isLoading: getServiceLoading, refetch} = useQuery('service-get', () =>
            apiService.getData('/ProductService'), {
            // enabled:false,
            onError: (error) => {
                const err=[]

                for (const property in error?.response?.data?.errors){
                  err.push(error?.response?.data?.errors[property])
                  
                }
        
          
                message.error(err[0][0]);
                // Handle the error
            },
        }
    );
    const [search,setSearch]=useState([])
    const [isSearch,setIsSearch]=useState(false)
    const deleteHandle = (url, id) => {
        mutate({url, id})

    }


    useEffect(() => {
        if (isSuccess) {
            refetch()
        }
    }, [isSuccess])

    const addService = () => {
        dispatch({type: EDIT_DATA, payload: ""})
        navigate('/service/add')
    }
    const serachProduct=(value)=>{
        if (value===""){
            setIsSearch(false)
        }
        else{
            setIsSearch(true)
        }


        const filterData=data?.filter(data=>data.nameEg.toLowerCase().includes(value.toLowerCase()) || data.nameRu.toLowerCase().includes(value.toLowerCase()))
        setSearch(filterData)
    }

    return (
        <div className={'site-space-compact-wrapper'}>
            <Space direction={'vertical'} style={{width: '100%'}}>
                <Row gutter={20}>
                    <Col span={16}>
                        <Input onChange={(e)=>serachProduct(e.target.value)}/>
                    </Col>
                    <Col span={8}>
                        <Button disabled={data?.length>2 ? true : false} type="primary" icon={<PlusOutlined/>} style={{width: '100%'}} onClick={addService}>
                            Add
                        </Button>
                    </Col>
                </Row>
                <Spin size='medium' spinning={getServiceLoading || deleteServiceLoading}>
                    <ServiceTable data={isSearch ? search : data} deleteHandle={deleteHandle}/>
                </Spin>
            </Space>


        </div>
    );
};

export default Index;