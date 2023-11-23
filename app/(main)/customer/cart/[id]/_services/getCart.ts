import pageRoute from '@/app/_constants/path';
import { axiosInstance } from '@/app/_services/apiClient';
import { useRouter } from 'next/navigation';

export const getCart = () => {
  return axiosInstance
    .get('/carts')
    .then(function (response) {
      return response.data.carts;
    })
    .catch(function (error) {
      console.log(error);

      const router = useRouter();
      router.push(pageRoute.customer.login());
    });
};
