import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,ResponsiveContainer} from 'recharts';
import { useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {message,Typography } from 'antd';
import { useMemo } from 'react';
const { Title } = Typography;


const OrderChart = () => {
  const {data} = useQuery(
    'dealers-get',
    () => apiService.getData('/dealers'),
    {
      onError: (error) => {
        const err=[]

        for (const property in error?.response?.data?.errors){
          err.push(error?.response?.data?.errors[property])
          
        }
        
  
        message.error(err[0][0]);
      },
    },
  );
    const dataOrder=useMemo(()=>{
      const ordersByDate = {};

      data?.forEach((order) => {
        const createAt = order.createdAt;
        const date = createAt.split("T")[0];
      
        if (ordersByDate[date]) {
          
          ordersByDate[date].orders += order.orders.reduce(
            (total, o) => total + o.productNumber,
            0
          );
        } else {
          ordersByDate[date] = {
            date,
            orders: order.orders.reduce(
              (total, o) => total + o.productNumber,
              0
            ),
          };
        }
      });
      const result = Object.values(ordersByDate);
      return result
    },[data])

  return (
    <div>
      <Title type='h2'>Daily distribution of orders</Title>
      <ResponsiveContainer width="100%" height={300}>
       <BarChart  data={dataOrder}>
                <CartesianGrid strokeDasharray="3 6" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>
    </div>
  )
}

export default OrderChart