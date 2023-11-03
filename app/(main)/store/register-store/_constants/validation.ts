export const validationStoreNum = (storeNum: string) => {
  const regExp = /^[0-9]+$/;
  if (!storeNum || storeNum.length !== 10 || !regExp.test(storeNum))
    return true;
  return false;
};
