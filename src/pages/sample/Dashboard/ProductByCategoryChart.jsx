import  { useMemo } from 'react';
import { PieChart, Pie,ResponsiveContainer,Tooltip } from 'recharts';
import {useQuery} from 'react-query';
import apiService from '../../../@crema/services/apis/api';
import {message, Typography} from 'antd';
const {Title} = Typography;


const SimplePieChart = () => {

  const {data} = useQuery(
    'product-get',
    () => apiService.getData('/Product'),
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
  const {data:categoryData,isSuccess:categorySuccess} = useQuery(
    'category-get',
    () => apiService.getData('/ProductType'),
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

  const categoryFilter= useMemo(()=>{

    const productByCategory = {};

    data?.forEach((product) => {

      const categoryId=product?.productTypeId

      if (productByCategory[categoryId]) {
        productByCategory[categoryId].count += 1;
      } else {
        productByCategory[categoryId] = {
          count:1,
          categoryId,
          name:''
        };
      }
    });

    const result = Object.values(productByCategory);
    let filterByCategory=[]
    if(categorySuccess){
     result?.map(product=>{
        categoryData.forEach(productType=>{
          if (product?.categoryId===productType?.id) {
            product.name=productType?.nameEg
            filterByCategory.push(product)
          }
        })
      })
    }
    
    return filterByCategory

  },[data,categoryData])

  return (
    <>
    <Title type='h2'>Distribution of products by category</Title>
      <ResponsiveContainer width={'100%'} height={300}>
    <PieChart width={'100%'} height={'100%'}>
      <Pie
        dataKey="count"
        isAnimationActive={false}
        data={categoryFilter}
        cx={150}
        cy={150}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
      {/* <Legend /> */}
    </PieChart>
    </ResponsiveContainer>
    </>
  );
};

export default SimplePieChart;
