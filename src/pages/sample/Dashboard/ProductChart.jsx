import  {useMemo } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {useQuery} from 'react-query';
import apiService from '../../../@crema/services/apis/api';
import {message, Typography} from 'antd';
const {Title} = Typography;

const ProductChart = () => {
  const {data} = useQuery('product-get', () => apiService.getData('/Product'), {
    onError: (error) => {
      const err=[]

      for (const property in error?.response?.data?.errors){
        err.push(error?.response?.data?.errors[property])
        
      }
      

      message.error(err[0][0]);
    },
  });
  const dataProduct = useMemo(() => {
    const productByDate = {};

    data?.forEach((product) => {
      const createAt = product.createAt;
      const date = createAt.split('T')[0];

      if (productByDate[date]) {
        productByDate[date].product += 1;
      } else {
        productByDate[date] = {
          date,
          product: 1,
        };
      }
    });
    const result = Object.values(productByDate);
    return result;
  }, [data]);

  return (
    <div>
      <Title type='h2'>Products daily join distribution</Title>
      <ResponsiveContainer width='100%' height={300}>
        <ComposedChart data={dataProduct}  margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
        <CartesianGrid stroke="#f5f5f5"  />
          <XAxis dataKey='date' scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='product' barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="product"  stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductChart;
