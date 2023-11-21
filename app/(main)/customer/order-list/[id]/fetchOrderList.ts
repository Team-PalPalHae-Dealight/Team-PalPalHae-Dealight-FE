import { axiosInstance } from '@/app/_services/apiClient';

export type ResponseItemType = {
  orderId: number;
  storeId: number;
  memberId: number;
  memberNickName: string;
  storeName: string;
  demand: string;
  arrivalTime: string;
  orderProductsRes: {
    orderProducts: OrderProductsType[];
  };
  totalPrice: number;
  createdAt: string;
  status: string;
};

type OrderProductsType = {
  itemId: number;
  name: string;
  quantity: number;
  discountPrice: number;
  originalPrice: number;
  image: string;
};

type FetchOrderListPropsType = {
  status: 'ALL' | 'RECEIVED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELED';
  page: number;
};

const fetchOrderList = async ({ status, page }: FetchOrderListPropsType) => {
  const url =
    status === 'ALL'
      ? `/orders?page=${page}&size=5`
      : `/orders?status=${status}&page=${page}&size=5`;

  const data = await axiosInstance
    .get(url)
    .then(res => {
      return res.data.orders;
    })
    .catch(err => console.log(err.message));

  console.log(data);

  return data;
};

export default fetchOrderList;
