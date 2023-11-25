import { axiosInstance } from '@/app/_services/apiClient';

export const getCart = () => {
  return axiosInstance
    .get('/carts')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response.data;
    });
};
