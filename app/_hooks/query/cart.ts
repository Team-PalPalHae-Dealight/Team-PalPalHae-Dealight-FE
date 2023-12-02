import { axiosInstance } from '@/app/_services/apiClient';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

type CartListType = {
  carts: CartType[];
};

type CartType = {
  cartId: number;
  discountPrice: number;
  expirationDateTime: string;
  itemId: number;
  itemImage: string;
  itemName: string;
  memberProviderId: number;
  quantity: number;
  stock: number;
  storeCloseTime: string;
  storeId: number;
  storeName: string;
};

type QuantityType = {
  carts: [
    {
      itemId: number;
      quantity: number;
    },
  ];
};

export const getCart = async (): Promise<CartListType> => {
  const response = await axiosInstance.get(`/carts`);

  const data = response.data;

  return data;
};

export const patchCart = async ({
  cartItem,
}: {
  cartItem: QuantityType;
}): Promise<CartType[] | undefined> => {
  try {
    const response = await axiosInstance.patch(`carts`, cartItem);

    const data = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCart = async ({
  itemId,
}: {
  itemId: number;
}): Promise<void> => {
  try {
    await axiosInstance.delete(`/carts/items?id=${itemId}`);
  } catch (error) {
    console.log(error);
  }
};

export const useGetCart = () => {
  return useSuspenseQuery({
    queryKey: ['cart'],
    queryFn: getCart,
  });
};

export const usePatchCart = () => {
  return useMutation({
    mutationFn: patchCart,
  });
};

export const useDeleteCart = () => {
  return useMutation({
    mutationFn: deleteCart,
  });
};
