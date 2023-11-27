import { axiosInstance } from '@/app/_services/apiClient';

type reqType = {
  req: {
    nickname: string;
    phoneNumber: string;
    address: {
      name: string;
      xCoordinate: number;
      yCoordinate: number;
    };
  };
};

export const patchMember = ({ req }: reqType) => {
  return axiosInstance
    .patch('/members/profiles', {
      nickname: req.nickname,
      phoneNumber: req.phoneNumber,
      address: req.address,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};
