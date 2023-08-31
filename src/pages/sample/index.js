import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Map = React.lazy(() => import('./Map'));
const MapPostEdit = React.lazy(() => import('./Map/MapPostEdit'));
const Product = React.lazy(() => import('./Product'));
const PostEditProduct = React.lazy(() => import('./Product/PostEditProduct'));
// const Orders = React.lazy(() => import('./Orders'));
// const Dashboard = React.lazy(() => import('./Dashboard'));


export const samplePagesConfigs = [


  {
    permittedRole: RoutePermittedRole.user,
    path: '/map',
    element: <Map/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/map/add',
    element: <MapPostEdit />,
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/product',
    element: <Product />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/product/add',
    element: <PostEditProduct />,
  },
  // {
  //   permittedRole: RoutePermittedRole.user,
  //   path: '/orders',
  //   element: <Orders />,
  // },
  // {
  //   permittedRole: RoutePermittedRole.user,
  //   path: '/dashboard',
  //   element: <Dashboard />,
  // },
];
