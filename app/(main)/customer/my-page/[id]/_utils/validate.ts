import { ERROR_MESSAGE } from '@/app/_constants/errorMessage';
import { string } from 'yup';

export const isValidNickName = () => {
  return string()
    .required(ERROR_MESSAGE.STORE_REQUIRED)
    .min(2, ERROR_MESSAGE.STORE_MIN);
};

export const isValidPhoneNumber = () => {
  return string()
    .required(ERROR_MESSAGE.STORE_REQUIRED)
    .matches(/^[0-9]+$/, ERROR_MESSAGE.STORE_NUMBER)
    .length(11, ERROR_MESSAGE.PHONE_NUMBER);
};
