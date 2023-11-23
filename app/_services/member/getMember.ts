import pageRoute from '@/app/_constants/path';
import { axiosInstance } from '@/app/_services/apiClient';
import { useRouter } from 'next/navigation';

export const getMember = async () => {
  return await axiosInstance
    .get('/members/profiles')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);

      const router = useRouter();
      router.push(pageRoute.customer.login());
    });
};
