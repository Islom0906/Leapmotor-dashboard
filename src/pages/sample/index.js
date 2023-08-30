import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Product = React.lazy(() => import('./Products'));
const PostEditProduct = React.lazy(() => import('./Products/PostEditProduct'));
const Category = React.lazy(() => import('./Category'));
const PostEditCategory = React.lazy(() => import('./Category/PostEditCategory'));
const Partner = React.lazy(() => import('./Partner'));
const PostEditPartner = React.lazy(() => import('./Partner/PostEditPartner'));
const Banner = React.lazy(() => import('./Banner'));
const PostEditBanner = React.lazy(() => import('./Banner/PostEditBanner'));
const Contact = React.lazy(() => import('./Contact'));
const PostEditContact = React.lazy(() => import('./Contact/PostEditContact'));
// const Service = React.lazy(() => import('./Service'));
// const PostEditService = React.lazy(() => import('./Service/PostEditService'));
const Orders = React.lazy(() => import('./Orders'));
const Dashboard = React.lazy(() => import('./Dashboard'));


export const samplePagesConfigs = [
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
  {
    permittedRole: RoutePermittedRole.user,
    path: '/category',
    element: <Category />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/category/add',
    element: <PostEditCategory />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/partner',
    element: <Partner />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/partner/add',
    element: <PostEditPartner />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner',
    element: <Banner />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner/add',
    element: <PostEditBanner />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact',
    element: <Contact />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact/add',
    element: <PostEditContact />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/orders',
    element: <Orders />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboard',
    element: <Dashboard />,
  },
];
