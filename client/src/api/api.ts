import axios, { AxiosHeaders } from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  //baseURL: 'https://final-rss-server.onrender.com',
  withCredentials: false,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    (config.headers as AxiosHeaders).set('Authorization', token);
  }
  return config;
});
