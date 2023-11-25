import { useRouter } from 'next/navigation';
import { axiosInstance } from '../../../../../_services/apiClient';
import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

export type PatchOrderPropsType = {
  orderId: string;
  status: string | undefined;
};

export const patchOrder = async ({ orderId, status }: PatchOrderPropsType) => {
  console.log(orderId, status);
  return await axiosInstance
    .patch(`/orders/${orderId}`, {
      status,
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
          ? pageRoute.store.orderList(String(providerId))
          : pageRoute.store.login()
      );
    });
};
