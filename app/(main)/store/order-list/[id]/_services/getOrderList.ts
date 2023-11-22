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

type getOrderListPropsType = {
  storeId: number | null;
  page: number;
  status: 'ALL' | 'RECEIVED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELED';
};

const getOrderList = async ({
  storeId,
  page,
  status,
}: getOrderListPropsType) => {
  const url =
    status === 'ALL'
      ? `/orders/stores?id=${storeId}&page=${page}&size=5`
      : `/orders/stores?id=${storeId}&status=${status}&page=${page}&size=5`;

  const data = await axiosInstance
    .get(url)
    .then(res => {
      return res.data.orders;
    })
    .catch(err => console.error(err.message));

  return data;
};

export default getOrderList;
