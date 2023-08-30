import React from 'react';
import OrderChart from './OrderChart';
import ProductChart from './ProductChart';
import ProductByCategoryChart from './ProductByCategoryChart';





const Dashboard = () => {
    return (
        <div>
           <OrderChart/>
           <ProductChart/>
            <ProductByCategoryChart/>
        </div>
    );
};

export default Dashboard;