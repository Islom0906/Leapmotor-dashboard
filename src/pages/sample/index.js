import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Map = React.lazy(() => import('./Map'));
const MapPostEdit = React.lazy(() => import('./Map/MapPostEdit'));
// const Banner = React.lazy(() => import('./Banner'));
// const PostEditBanner = React.lazy(() => import('./Banner/PostEditBanner'));
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

  // {
  //   permittedRole: RoutePermittedRole.user,
  //   path: '/banner',
  //   element: <Banner />,
  // },
  // {
  //   permittedRole: RoutePermittedRole.user,
  //   path: '/banner/add',
  //   element: <PostEditBanner />,
  // },
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
