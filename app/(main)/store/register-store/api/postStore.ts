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
  await axiosInstance
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
      /** @todo role을 store로 바꾸는 api 호출 및 storeId값 저장하는 로직 추가 */
      console.log(response);
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
    })
    .catch(function (error) {
      console.log(error);
    });
};
