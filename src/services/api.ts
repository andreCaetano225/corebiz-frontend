import axios from 'axios';

const api = axios.create({
  baseURL: 'https://corebiz-test-server.onrender.com/api/v1/',
});

export default api;
