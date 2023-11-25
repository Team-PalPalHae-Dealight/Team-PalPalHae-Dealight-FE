import { axiosInstance } from '@/app/_services/apiClient';
import { clearCart } from './clearCart';

type ReqType = {
  req: {
    orderProductsReq: {
      orderProducts: { itemId: number; quantity: number }[] | undefined;
    };
    storeId: number;
    demand: string;
    arrivalTime: string;
    totalPrice: number;
  };
};

export const postOrder = ({ req }: ReqType) => {
  return axiosInstance
    .post('/orders', req)
    .then(async function (response) {
      console.log(response);
      await clearCart();
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error.response;
    });
};
