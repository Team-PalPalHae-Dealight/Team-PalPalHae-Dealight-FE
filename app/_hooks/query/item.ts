import { ItemType } from '@/app/_types/api/item';
import { useMutation, useQuery } from '@tanstack/react-query';

export const itemKeys = {
  item: (itemId: string) => ['item', itemId] as const,
};

type GetItemPropsType = {
  itemId: string;
};

export const getItem = async ({
  itemId,
}: GetItemPropsType): Promise<ItemType> => {
  const response = await fetch(
    `http://localhost:3000/mocks/api/items/${itemId}`,
    {
      method: 'GET',
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
  const response = await fetch(
    `http://localhost:3000/mocks/api/items/${itemId}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }
  );

  return response.status;
};

export const useGetItem = ({ itemId }: GetItemPropsType) => {
  return useQuery({
    queryKey: [itemKeys.item(itemId)],
    queryFn: () => getItem({ itemId }),
  });
};

export const usePatchItem = () => {
  return useMutation({ mutationFn: patchItem });
};

export const useDeleteItem = () => {
  return useMutation({ mutationFn: deleteItem });
};
