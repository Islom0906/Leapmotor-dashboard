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
        id: 'product',
        title: 'Product',
        messageId: 'sidebar.sample.product',
        type: 'item',
        icon: <BsFillImageFill />,
        path: '/product',
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
        id: 'Filial',
        title: 'Filial',
        messageId: 'sidebar.sample.filial',
        type: 'item',
        icon: <BsFillImageFill />,
        path: '/filial',
      },
      {
        id: 'FilialInner',
        title: 'Filial Inner',
        messageId: 'sidebar.sample.filialInner',
        type: 'item',
        icon: <BsFillImageFill />,
        path: '/filialInner',
      },
      {
        id: 'Contact',
        title: 'Contact Inner',
        messageId: 'sidebar.sample.contact',
        type: 'item',
        icon: <BsFillImageFill />,
        path: '/contact',
      },
      {
        id: 'News',
        title: 'News',
        messageId: 'sidebar.sample.news',
        type: 'item',
        icon: <BsFillImageFill />,
        path: '/news',
      },
      {
        id: 'About',
        title: 'About',
        messageId: 'sidebar.sample.about',
        type: 'item',
        icon: <BsFillImageFill />,
        path: '/about',
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
