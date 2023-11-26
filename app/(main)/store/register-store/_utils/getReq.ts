import LocalStorage from '@/app/_utils/localstorage';

const getReq = () => {
  const req = {
    storeNumber: LocalStorage.getItem('dealight-storeNumber'),
    name: LocalStorage.getItem('dealight-storeName'),
    telephone: LocalStorage.getItem('dealight-storePhone'),
    addressName: LocalStorage.getItem('dealight-storeAddress'),
    xCoordinate: LocalStorage.getItem('dealight-coords-x'),
    yCoordinate: LocalStorage.getItem('dealight-coords-y'),
    openTime: LocalStorage.getItem('dealight-storeOpenTime'),
    closeTime: LocalStorage.getItem('dealight-storeCloseTime'),
    dayOff: LocalStorage.getItem('dealight-storeDayOff'),
  };
  return req;
};

export default getReq;
