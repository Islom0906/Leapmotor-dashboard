import React from 'react';
import {HiOutlineInbox} from "react-icons/hi";
import {MdOutlineCategory} from "react-icons/md";
import {BsFillImageFill} from "react-icons/bs";
import {TiContacts} from "react-icons/ti";
// import {FiInfo } from "react-icons/fi";
import {IoIosStats} from 'react-icons/io'
import {SlBasketLoaded} from 'react-icons/sl'
import {FaRegHandshake} from 'react-icons/fa'


const routesConfig = [
  {
    id: 'app',
    title: 'Sample',
    messageId: 'sidebar.sample',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        messageId: 'sidebar.sample.dashboard',
        type: 'item',
        icon: <IoIosStats />,
        path: '/dashboard',
      },
      {
        id: 'product',
        title: 'Product',
        messageId: 'sidebar.sample.product',
        type: 'item',
        icon: <HiOutlineInbox />,
        path: '/product',
      },
      {
        id: 'category',
        title: 'Category',
        messageId: 'sidebar.sample.category',
        type: 'item',
        icon: <MdOutlineCategory />,
        path: '/category',
      },
      {
        id: 'partner',
        title: 'Partner',
        messageId: 'sidebar.sample.partner',
        type: 'item',
        icon: <FaRegHandshake />,
        path: '/partner',
      },
      {
        id: 'banner',
        title: 'Banner',
        messageId: 'sidebar.sample.banner',
        type: 'item',
        icon: <BsFillImageFill />,
        path: '/banner',
      },
      {
        id: 'contact',
        title: 'Contact',
        messageId: 'sidebar.sample.contact',
        type: 'item',
        icon: <TiContacts />,
        path: '/contact',
      },
      // {
      //   id: 'service',
      //   title: 'Service',
      //   messageId: 'sidebar.sample.service',
      //   type: 'item',
      //   icon: <FiInfo />,
      //   path: '/service',
      // },
      {
        id: 'orders',
        title: 'Orders',
        messageId: 'sidebar.sample.orders',
        type: 'item',
        icon: <SlBasketLoaded />,
        path: '/orders',
      },
    ],
  },
];
export default routesConfig;
