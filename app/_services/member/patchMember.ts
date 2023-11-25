import { profileType } from '@/app/_types/member/profileType';
import { axiosInstance } from '@/app/_services/apiClient';

type reqType = {
  req: profileType;
};

export const patchMember = ({ req }: reqType) => {
  return axiosInstance
    .patch('/members/profiles', {
      nickname: req.nickName,
      phoneNumber: req.phoneNumber,
      address: {
        name: req.address.name,
        xCoordinate: req.address.xCoordinate,
        yCoordinate: req.address.yCoordinate,
      },
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
