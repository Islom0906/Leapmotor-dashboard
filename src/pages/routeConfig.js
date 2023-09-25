import React from 'react';
import {BsFillImageFill} from "react-icons/bs";
import {IoIosStats} from 'react-icons/io'
import {FaFileContract, FaMapMarkerAlt} from "react-icons/fa";
import {HiOutlineInbox} from "react-icons/hi";
import {TiContacts} from "react-icons/ti";
import {ImNewspaper} from "react-icons/im";
// import {FiInfo} from "react-icons/fi";
import {MdDriveEta} from "react-icons/md";
import {FiInfo} from "react-icons/fi";


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
        id: 'map',
        title: 'Map',
        messageId: 'sidebar.sample.map',
        type: 'item',
        icon: <FaMapMarkerAlt />,
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
        icon: <TiContacts />,
        path: '/contact',
      },
      {
        id: 'News',
        title: 'News',
        messageId: 'sidebar.sample.news',
        type: 'item',
        icon: <ImNewspaper />,
        path: '/news',
      },
      {
        id: 'About',
        title: 'About',
        messageId: 'sidebar.sample.about',
        type: 'item',
        icon: <FiInfo />,
        path: '/about',
      },
      {
        id: 'Position',
        title: 'Position',
        messageId: 'sidebar.sample.position',
        type: 'item',
        icon: <FiInfo />,
        path: '/position',
      },
      {
        id: 'Exterior',
        title: 'Exterior',
        messageId: 'sidebar.sample.exterior',
        type: 'item',
        icon: <FiInfo />,
        path: '/exterior',
      },
      {
        id: 'Interior',
        title: 'Interior',
        messageId: 'sidebar.sample.interior',
        type: 'item',
        icon: <FiInfo />,
        path: '/interior',
      },
      {
        id: 'Option',
        title: 'Option',
        messageId: 'sidebar.sample.option',
        type: 'item',
        icon: <FiInfo />,
        path: '/option',
      },
      {
        id: 'order',
        title: 'Order',
        messageId: 'sidebar.sample.order',
        type: 'item',
        icon: <MdDriveEta />,
        path: '/order',
      },
      {
        id: 'testDrive',
        title: 'Test Drive',
        messageId: 'sidebar.sample.testDrive',
        type: 'item',
        icon: <MdDriveEta />,
        path: '/testDrive',
      },
      {
        id: 'dealers',
        title: 'Dealers',
        messageId: 'sidebar.sample.dealers',
        type: 'item',
        icon: <FaFileContract />,
        path: '/dealers',
      },
    ],
  },
];
export default routesConfig;
