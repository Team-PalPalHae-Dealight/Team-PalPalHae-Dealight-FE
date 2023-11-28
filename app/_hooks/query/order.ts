import { OrdersType } from '@/app/_types/api/order';
import { axiosInstance } from '@/app/_services/apiClient';
import useOrdersInfiniteScroll from './useOrdersInfiniteScroll';

export const getMemberOrders = async ({
  status,
  size,
  page,
}: {
  status: 'ALL' | 'RECEIVED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELED';
  size: number;
  page: number;
}): Promise<{
  orders: OrdersType[];
  hasNext: boolean;
}> => {
  const url =
    status === 'ALL'
      ? `/orders?&page=${page}&size=${size}`
      : `/orders?status=${status}&page=${page}&size=${size}`;
  const response = await axiosInstance.get(url);

  const data = response.data;

  return data;
};

export const useGetMemberOrders = ({
  status,
  size,
}: {
  status: 'ALL' | 'RECEIVED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELED';
  size: number;
}) => {
  return useOrdersInfiniteScroll({
    queryKey: status === 'ALL' ? 'member-orders' : `member-orders-${status}`,
    fetchData: pageParam =>
      getMemberOrders({
        status,
        size,
        page: pageParam,
      }),
  });
};

export const getStoreOrders = async ({
  storeId,
  status,
  size,
  page,
}: {
  storeId: number | null;
  status: 'ALL' | 'RECEIVED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELED';
  size: number;
  page: number;
}): Promise<{
  orders: OrdersType[];
  hasNext: boolean;
}> => {
  const url =
    status === 'ALL'
      ? `/orders/stores?id=${storeId}&page=${page}&size=${size}`
      : `/orders/stores?id=${storeId}&status=${status}&page=${page}&size=${size}`;
  const response = await axiosInstance.get(url);

  const data = response.data;

  return data;
};

export const useGetStoreOrders = ({
  storeId,
  status,
  size,
}: {
  storeId: number | null;
  status: 'ALL' | 'RECEIVED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELED';
  size: number;
}) => {
  return useOrdersInfiniteScroll({
    queryKey: status === 'ALL' ? 'store-orders' : `store-orders-${status}`,
    fetchData: pageParam =>
      getStoreOrders({
        storeId,
        status,
        size,
        page: pageParam,
      }),
  });
};
