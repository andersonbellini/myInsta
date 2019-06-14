import axios from 'axios';

//baseURL:"http://localhost:3333"

const api = axios.create({
    baseURL:"http://192.168.250.50:3333"
});

export default api;