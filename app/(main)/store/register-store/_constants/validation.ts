export const validationStoreNum = (storeNum: string) => {
  const regExp = /^[0-9]+$/;
  if (!storeNum || storeNum.length !== 10 || !regExp.test(storeNum))
    return true;
  return false;
};

export const validationStoreName = (storeName: string) => {
  if (!storeName || storeName.length < 1) return true;
  return false;
};

export const validationStorePhone = (storePhone: string) => {
  const regExp = /^[0-9]+$/;
  if (!storePhone || storePhone.length !== 10 || !regExp.test(storePhone))
    return true;
  return false;
};

export const validationStoreAddress = (storeAddress: string) => {
  if (!storeAddress) return true;
  return false;
};
