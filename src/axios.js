import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dlpapi.herokuapp.com/'
});

export default instance;