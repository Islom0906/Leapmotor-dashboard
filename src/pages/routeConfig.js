import React from 'react';
import {MdOutlineCategory} from "react-icons/md";
import {BsFillImageFill} from "react-icons/bs";
import {IoIosStats} from 'react-icons/io'
import {SlBasketLoaded} from 'react-icons/sl'


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
        id: 'map',
        title: 'Map',
        messageId: 'sidebar.sample.map',
        type: 'item',
        icon: <MdOutlineCategory />,
        path: '/map',
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
