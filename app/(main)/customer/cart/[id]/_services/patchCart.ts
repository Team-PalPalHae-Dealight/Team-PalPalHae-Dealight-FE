//import pageRoute from '@/app/_constants/path';
import { axiosInstance } from '@/app/_services/apiClient';
//import { useRouter } from 'next/navigation';

type QuantityType = {
  itemId: number;
  quantity: number;
};

type ReqType = {
  carts: QuantityType[];
};

export const patchCart = ({ carts }: ReqType) => {
  return axiosInstance
    .patch('/carts', {
      carts: carts,
    })
    .then()
    .catch(function (error) {
      console.log(error);
    });
};
