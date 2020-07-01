import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dthingzapi.herokuapp.com/'
});

export default instance;