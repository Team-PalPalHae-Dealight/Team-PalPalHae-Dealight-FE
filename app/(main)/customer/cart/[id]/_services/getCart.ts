import { axiosInstance } from '@/app/_services/apiClient';

export const getCart = () => {
  return axiosInstance
    .get('/carts')
    .then(function (response) {
      console.log(response.data.carts);
      return response.data.carts;
    })
    .catch(function (error) {
      console.log(error);
    });
};
