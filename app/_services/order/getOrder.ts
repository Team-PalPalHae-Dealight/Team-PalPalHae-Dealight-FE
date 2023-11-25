import { useRouter } from 'next/navigation';
import { axiosInstance } from '../apiClient';
import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

export const getOrder = (orderId: number) => {
  return axiosInstance
    .get(`/orders/${orderId}`)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);

      const router = useRouter();
      const { providerId } = useUserInfo();
      //
      router.push(
        providerId
          ? pageRoute.customer.orderList(String(providerId))
          : pageRoute.customer.login()
      );
    });
};
