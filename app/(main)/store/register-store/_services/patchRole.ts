import { axiosInstance } from '@/app/_services/apiClient';

export const patchRole = async () => {
  return await axiosInstance
    .patch('/auth/role')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};
