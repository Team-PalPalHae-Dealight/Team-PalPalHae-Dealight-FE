import { axiosInstance } from '@/app/_services/apiClient';

type reqType = {
  req: {
    address?: {
      name: string;
      xCoordinate: number;
      yCoordinate: number;
    };
    nickName?: string;
    phoneNumber?: string;
  };
};

export const patchMember = ({ req }: reqType) => {
  return axiosInstance
    .patch('/members/profiles', {
      req,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
