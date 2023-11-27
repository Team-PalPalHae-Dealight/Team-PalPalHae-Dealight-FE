import { axiosInstance } from '@/app/_services/apiClient';

export const getProfile = () => {
  return axiosInstance
    .get(`/stores/profiles`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
