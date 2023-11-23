import pageRoute from '@/app/_constants/path';
import { axiosInstance } from '@/app/_services/apiClient';
import { useRouter } from 'next/navigation';
import { PatchProfileType } from '../_types/profileType';

type ReqType = {
  req: PatchProfileType;
};

export const patchProfile = ({ req }: ReqType) => {
  return axiosInstance
    .patch(`/stores/profiles/${req.storeId}`, {
      telephone: req.telephone,
      addressName: req.addressName,
      xCoordinate: req.xCoordinate,
      yCoordinate: req.yCoordinate,
      openTime: req.openTime,
      closeTime: req.closeTime,
      dayOff: req.dayOff,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);

      const router = useRouter();
      router.push(pageRoute.store.login());
    });
};
