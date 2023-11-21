import { axiosInstance } from '@/app/_services/apiClient';
import { ItemType } from '@/app/_types/api/item';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const itemKeys = {
  item: (itemId: string) => ['item', itemId] as const,
};

type GetItemPropsType = {
  itemId: string;
};

type CreateItmePropsType = Omit<ItemType, 'itemId' | 'storeId'>;

export const getItem = async ({
  itemId,
}: GetItemPropsType): Promise<ItemType> => {
  const response = await axiosInstance.get(`/items/${itemId}`);

  const data = response.data;

  return data;
};

export const createItem = async ({
  item,
}: {
  item: CreateItmePropsType;
}): Promise<ItemType> => {
  const { image, ...itemReq } = item;

  const formData = new FormData();

  formData.append(
    'itemReq',
    new Blob([JSON.stringify(itemReq)], { type: 'application/json' })
  );

  formData.append('image', image ?? new Blob([], { type: 'image/jpeg' }));

  const response = await axiosInstance.post(`/items`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  const data = response.data;

  return data;
};

export const patchItem = async ({
  itemId,
}: GetItemPropsType): Promise<ItemType> => {
  const response = await fetch(
    `http://localhost:3000/mocks/api/items/${itemId}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    if (data.message) {
      throw new Error(data.message);
    }

    throw new Error('알 수 없는 에러');
  }

  return data;
};

export const deleteItem = async ({ itemId }: GetItemPropsType) => {
  const response = await axiosInstance.delete(`/items/${itemId}`);

  const data = response.data;

  return data;
};

export const useGetItem = ({ itemId }: GetItemPropsType) => {
  return useSuspenseQuery({
    queryKey: [itemKeys.item(itemId)],
    queryFn: () => getItem({ itemId }),
  });
};

export const useCreateItem = () => {
  return useMutation({ mutationFn: createItem });
};

export const usePatchItem = () => {
  return useMutation({ mutationFn: patchItem });
};

export const useDeleteItem = () => {
  return useMutation({ mutationFn: deleteItem });
};
