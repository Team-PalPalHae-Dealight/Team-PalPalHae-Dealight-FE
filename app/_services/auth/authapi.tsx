import { useAxios } from './auth';

export const useGet = () => {
  const axiosInstance = useAxios();

  const get = async (url: string) => {
    try {
      console.log('url',url);
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return get;
};

export const usePost = () => {
  const axiosInstance = useAxios();

  const post = async (url: string, data: any) => {
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return post;
};
