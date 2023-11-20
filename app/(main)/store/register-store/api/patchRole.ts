import { axiosInstance } from '@/app/_services/apiClient';

export const patchRole = async () => {
  await axiosInstance
    .patch('/auth/role')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
