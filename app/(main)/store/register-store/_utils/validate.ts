import { array, string } from 'yup';
import { ERROR_MESSAGE } from '../_constants/errorMessage';

export const isValidStoreName = () => {
  return string()
    .required(ERROR_MESSAGE.STORE_REQUIRED)
    .min(2, ERROR_MESSAGE.STORE_MIN);
};

export const isValidStorePhone = () => {
  return string()
    .required(ERROR_MESSAGE.STORE_REQUIRED)
    .matches(/^[0-9]+$/, ERROR_MESSAGE.STORE_NUMBER)
    .length(10, ERROR_MESSAGE.STORE_LENGTH);
};

export const isValidStoreOpenTime = () => {
  return string().required(ERROR_MESSAGE.STORE_REQUIRED);
};

export const isValidStoreCloseTime = () => {
  return string().required(ERROR_MESSAGE.STORE_REQUIRED);
};

export const isValidStoreNumber = () => {
  return string()
    .required(ERROR_MESSAGE.STORE_REQUIRED)
    .matches(/^[0-9]+$/, ERROR_MESSAGE.STORE_NUMBER)
    .length(10, ERROR_MESSAGE.STORE_LENGTH);
};

export const isValidStoreDayOff = () => {
  return array()
    .required(ERROR_MESSAGE.STORE_REQUIRED)
    .min(1, ERROR_MESSAGE.STORE_ARRAY_MIN);
};
