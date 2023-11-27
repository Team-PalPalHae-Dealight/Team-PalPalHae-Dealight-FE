import { axiosInstance } from '@/app/_services/apiClient';

export const getMember = async () => {
  return await axiosInstance
    .get('/members/profiles')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
