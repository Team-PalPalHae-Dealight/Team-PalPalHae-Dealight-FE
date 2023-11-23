import { axiosInstance } from '@/app/_services/apiClient';
import { ItemType } from '@/app/_types/api/item';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const itemKeys = {
  item: (itemId: string) => ['item', itemId] as const,
};

type GetItemPropsType = {
  itemId: string;
};

type ItmePropsType = Omit<
  ItemType,
  'itemId' | 'storeId' | 'storeName' | 'storeCloseTime' | 'storeAddress'
>;

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
  item: ItmePropsType;
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
  item,
  itemId,
}: {
  item: ItmePropsType;
  itemId: string;
}): Promise<ItemType> => {
  const { image, ...itemReq } = item;

  const formData = new FormData();

  formData.append(
    'itemReq',
    new Blob([JSON.stringify(itemReq)], { type: 'application/json' })
  );

  if (typeof image === 'string') {
    const url = image as string;
    const filename = url.split('/').pop()!;

    const response = await fetch(url);
    const blob = await response.blob();

    const convertedFile = new File(
      [blob],
      filename.includes('.png') ? filename : filename + '.png',
      { type: blob.type }
    );

    formData.append('image', convertedFile);
  } else {
    formData.append('image', image ?? new Blob([], { type: 'image/jpeg' }));
  }

  const response = await axiosInstance.patch(`/items/${itemId}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  const data = response.data;

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
