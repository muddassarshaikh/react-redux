import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:6786/api'
});

export default instance;
