import { AxiosError, isAxiosError } from 'axios';

type DealightErrorType = {
  code: string;
  message: string;
};

export function customError(err: Error | AxiosError) {
  if (isAxiosError(err)) {
    const error = err as AxiosError<DealightErrorType>;
    return error.response?.data.message;
  }

  return '알 수 없는 에러가 발생했습니다.';
}
