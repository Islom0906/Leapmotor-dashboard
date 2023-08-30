import {Tag, Table,message,Spin} from 'antd';
import apiService from "../../../@crema/services/apis/api";
import { useQuery} from "react-query";
import { useEffect, useState } from "react";
import moment from 'moment'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <Tag>{text}</Tag>,
  },
  {
    title: 'Address',
    dataIndex: 'adress',
    key: 'adress',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'All Price',
    dataIndex: 'allPrice',
    key: 'allPrice',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Date',
    dataIndex: 'createAt',
    key: 'createAt',
    render: (text) => <p>{moment(text,["h:mm A"]).format('MMMM Do YYYY, h:mm:ss a')}</p>,
  },
];

const columnsOrders = [
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Product Count',
    dataIndex: 'productNumber',
    key: 'productNumber',
    render: (text) => <Tag>{text}</Tag>,
  },
  {
    title: 'Product Price',
    dataIndex: 'productsPrice',
    key: 'productsPrice',
    render: (text) => <p>{text}</p>,
  },
];

const Orders = () => {
  const {data, isLoading} = useQuery(
    'order-get',
    () => apiService.getData('/UserOrder'),
    {
      // enabled:false,
      onError: (error) => {
        const err=[]

      for (const property in error?.response?.data?.errors){
        err.push(error?.response?.data?.errors[property])
        
      }
      

      message.error(err[0][0]);
        // Handle the error
      },
    },
  );
  const [reverseData,setReverseData]=useState([])


  useEffect(()=>{
    const reverse=data?.reverse()
    setReverseData(reverse)
},[data])

  return (
    <div>
      <Spin size='medium' spinning={isLoading}>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => {
              return (
                <Table
                  columns={columnsOrders}
                  dataSource={record?.orders}
                  rowKey={(order) => order.id}
                />
              );
            },
          }}
          dataSource={reverseData}
          rowKey={(record) => record?.id}
        />
      </Spin>
    </div>
  );
};

export default Orders;
