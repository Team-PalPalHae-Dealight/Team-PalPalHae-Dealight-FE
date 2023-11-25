import LocalStorage from '@/app/_utils/localstorage';
import axios from 'axios';
import https from 'https';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

axiosInstance.interceptors.request.use(config => {
  const token = LocalStorage.getItem('dealight-accessToken');

  if (token !== null) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
