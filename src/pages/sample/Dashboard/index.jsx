import React from 'react';
import DealersChart from './dealersChart';
import TestDriveChart from './testDriveChart';
// import ProductByCategoryChart from './ProductByCategoryChart';





const Dashboard = () => {
    return (
        <div>
           <DealersChart/>
           <TestDriveChart/>
           {/* <ProductByCategoryChart/>*/}
        </div>
    );
};

export default Dashboard;