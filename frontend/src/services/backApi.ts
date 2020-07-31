import axios from 'axios';

const backApi = axios.create({
    baseURL: `http://localhost:3333`
});

export default backApi;