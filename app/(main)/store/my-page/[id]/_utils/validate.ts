import { ERROR_MESSAGE } from '@/app/_constants/errorMessage';
import { string } from 'yup';

export const isValidRequire = () => {
  return string().required(ERROR_MESSAGE.STORE_REQUIRED);
};

export const isValidStorePhone = () => {
  return string()
    .required(ERROR_MESSAGE.STORE_REQUIRED)
    .matches(/^[0-9]+$/, ERROR_MESSAGE.STORE_NUMBER)
    .length(10, ERROR_MESSAGE.STORE_LENGTH);
};

export const isValidStoreNumber = () => {
  return string()
    .required(ERROR_MESSAGE.STORE_REQUIRED)
    .matches(/^[0-9]+$/, ERROR_MESSAGE.STORE_NUMBER)
    .length(10, ERROR_MESSAGE.STORE_LENGTH);
};

export const isValidPhoneNumber = () => {
  return string()
    .required(ERROR_MESSAGE.STORE_REQUIRED)
    .matches(/^[0-9]+$/, ERROR_MESSAGE.STORE_NUMBER)
    .length(11, ERROR_MESSAGE.STORE_LENGTH);
};
