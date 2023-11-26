import { axiosInstance } from '@/app/_services/apiClient';

export const clearCart = () => {
  return axiosInstance
    .delete('/carts')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};
