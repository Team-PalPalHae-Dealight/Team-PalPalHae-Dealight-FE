import { axiosInstance } from '@/app/_services/apiClient';

export const clearCart = () => {
  return axiosInstance
    .delete('/carts')
    .then(() => window.location.reload())
    .catch(error => console.log(error));
};
