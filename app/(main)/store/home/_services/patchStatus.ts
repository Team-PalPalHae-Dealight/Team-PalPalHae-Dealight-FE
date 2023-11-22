import pageRoute from '@/app/_constants/path';
import { axiosInstance } from '@/app/_services/apiClient';
import { useRouter } from 'next/navigation';

export const patchStatus = async (storeId: number, storeStatus: string) => {
  return await axiosInstance
    .patch(`/stores/status/${storeId}`, {
      storeStatus: storeStatus,
    })

    .then(function (response) {
      console.log(response.data.storeStatus);
    })

    .catch(function (error) {
      console.log(error);

      const router = useRouter();
      router.push(pageRoute.store.login());
    });
};
