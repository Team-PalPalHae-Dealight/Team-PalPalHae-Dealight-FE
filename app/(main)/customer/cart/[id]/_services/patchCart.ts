//import pageRoute from '@/app/_constants/path';
import { axiosInstance } from '@/app/_services/apiClient';
//import { useRouter } from 'next/navigation';

type ReqType = {
  req: [
    {
      itemId: number;
      quantity: number;
    },
  ];
};

export const patchCart = ({ req }: ReqType) => {
  return axiosInstance
    .patch('/carts', {
      carts: req,
    })
    .then(function (response) {
      console.log(response);
      //return response.data.carts;
    })
    .catch(function (error) {
      console.log(error);

      //   const router = useRouter();
      //   router.push(pageRoute.customer.login());
    });
};
