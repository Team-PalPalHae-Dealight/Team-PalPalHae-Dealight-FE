import { useRouter } from 'next/navigation';
import { axiosInstance } from '../../../../../_services/apiClient';
import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

export const cancelOrder = (orderId: number) => {
  return axiosInstance
    .patch(`/orders/${orderId}`, {
      status: 'CANCELED',
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);

      const router = useRouter();
      const { providerId } = useUserInfo();
      router.push(
        providerId
          ? pageRoute.customer.orderList(String(providerId))
          : pageRoute.customer.login()
      );
    });
};
