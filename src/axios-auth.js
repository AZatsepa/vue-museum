import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localfortress.com:3000/oauth',
});

export default instance;
