import { axiosInstance } from '@/app/_services/apiClient';
import LocalStorage from '@/app/_utils/localstorage';
import { patchRole } from './patchRole';

type postStoreReqType = {
  req: {
    storeNumber: string;
    name: string;
    telephone: string;
    addressName: string;
    xCoordinate: number;
    yCoordinate: number;
    openTime: string;
    closeTime: string;
    dayOff: string[];
  };
};

export const postStore = async ({ req }: postStoreReqType) => {
  return await axiosInstance
    .post('/stores', {
      storeNumber: req.storeNumber,
      name: req.name,
      telephone: req.telephone,
      addressName: req.addressName,
      xCoordinate: req.xCoordinate,
      yCoordinate: req.yCoordinate,
      openTime: req.openTime,
      closeTime: req.closeTime,
      dayOff: req.dayOff,
    })
    .then(function (response) {
      patchRole();

      LocalStorage.removeItem('dealight-storeNumber');
      LocalStorage.removeItem('dealight-storeName');
      LocalStorage.removeItem('dealight-storePhone');
      LocalStorage.removeItem('dealight-storeAddress');
      LocalStorage.removeItem('dealight-coords-x');
      LocalStorage.removeItem('dealight-coords-y');
      LocalStorage.removeItem('dealight-storeOpenTime');
      LocalStorage.removeItem('dealight-storeCloseTime');
      LocalStorage.removeItem('dealight-storeDayOff');

      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};
