import { axiosInstance } from '@/app/_services/apiClient';
import { profileType } from '../_types/profileType';

type reqType = {
  req: profileType;
};

export const patchProfile = ({ req }: reqType) => {
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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
