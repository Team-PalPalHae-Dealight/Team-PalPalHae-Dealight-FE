import { axiosInstance } from '@/app/_services/apiClient';

export const deleteCart = (itemId: number) => {
  return axiosInstance
    .delete(`/carts/items?id=${itemId}`)
    .then(() => {})
    .catch(function (error) {
      console.log(error);
    });
};
