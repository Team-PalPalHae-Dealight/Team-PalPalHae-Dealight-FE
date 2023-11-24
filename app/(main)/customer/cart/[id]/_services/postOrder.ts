import { axiosInstance } from '@/app/_services/apiClient';

type ReqType = {
  req: {
    orderProductsReq: {
      orderProducts: [
        {
          itemId: number;
          quantity: number;
        },
      ];
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
    .then(function (response) {
      console.log(response);
      //return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
