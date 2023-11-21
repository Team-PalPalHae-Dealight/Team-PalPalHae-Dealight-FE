import pageRoute from '@/app/_constants/path';
import { axiosInstance } from '@/app/_services/apiClient';
import { useRouter } from 'next/navigation';

export const getStatus = async (storeId: number) => {
  return await axiosInstance
    .get(`/stores/status/${storeId}`)

    .then(function (response) {
      return response.data.storeStatus;
    })

    .catch(function (error) {
      console.log(error);

      const router = useRouter();
      router.push(pageRoute.store.login());
    });
};
