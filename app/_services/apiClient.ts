import LocalStorage from '@/app/_utils/localstorage';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: '/',
  },
});

axiosInstance.interceptors.request.use(config => {
  const token = LocalStorage.getItem('dealight-accessTokne');
  if (token !== null) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
