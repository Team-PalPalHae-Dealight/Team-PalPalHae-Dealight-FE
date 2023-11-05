import axios from 'axios';
import { useAuth } from '@/app/_hooks/auth/auth';

export const useAxios = () => {
  const auth = useAuth();

  if (!auth) {
    throw new Error('Auth context is undefined');
  }

  const { token } = auth;
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: '/',
    },
  });

  instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return instance;
};
