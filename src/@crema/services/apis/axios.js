import {getItem} from '../../utility/helper/persistence-storage';
import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`;

axios.interceptors.request.use((config) => {
    const jwt = getItem('token');
    const authorization = jwt!==null ? `Bearer ${jwt}` : '';
    config.headers.authorization = authorization;
    return config;
});

export default axios;