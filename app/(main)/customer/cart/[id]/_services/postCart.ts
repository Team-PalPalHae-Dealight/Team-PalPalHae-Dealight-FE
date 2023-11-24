import { axiosInstance } from '@/app/_services/apiClient';

type ReqType = {
  req: {
    itemId: number;
    cartAdditionType: 'clear' | 'check';
  };
};

export const postCart = ({ req }: ReqType) => {
  return axiosInstance
    .post(`/carts/items?id=${req.itemId}&type=${req.cartAdditionType}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
};
