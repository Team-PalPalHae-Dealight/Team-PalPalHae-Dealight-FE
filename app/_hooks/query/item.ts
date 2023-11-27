import { axiosInstance } from '@/app/_services/apiClient';
import { ItemType } from '@/app/_types/api/item';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import useInfiniteScroll from './useInfiniteScroll';
import { convertUrlToFile } from '@/app/_utils/convert';

export const itemKeys = {
  item: (itemId: string) => ['item', itemId] as const,
  storeItem: (storeId: string) => ['store-item', storeId] as const,
  myStoreItem: () => ['store-item'] as const,
};

type GetItemPropsType = {
  itemId: string;
};

type ItmePropsType = Omit<
  ItemType,
  'itemId' | 'storeId' | 'storeName' | 'storeCloseTime' | 'storeAddress'
>;

type GetStoreItemsPropsType = {
  storeId: string;
  size: number;
  page: number;
};

export const getItem = async ({
  itemId,
}: GetItemPropsType): Promise<ItemType> => {
  const response = await axiosInstance.get(`/items/${itemId}`);

  const data = response.data;

  return data;
};

export const getStoreItems = async ({
  storeId,
  size,
  page,
}: GetStoreItemsPropsType): Promise<{
  items: ItemType[];
  hasNext: boolean;
}> => {
  const response = await axiosInstance.get(
    `/items/stores/${storeId}?size=${size}&page=${page}`
  );

  const data = response.data;

  return data;
};

export const getMyStoreItems = async ({
  size,
  page,
}: Omit<GetStoreItemsPropsType, 'storeId'>): Promise<{
  items: ItemType[];
  hasNext: boolean;
}> => {
  const response = await axiosInstance.get(
    `/items/stores?size=${size}&page=${page}`
  );

  const data = response.data;

  return data;
};

export const getMemberItems = async ({
  xCoordinate,
  yCoordinate,
  sortBy,
  size,
  page,
}: {
  xCoordinate: number;
  yCoordinate: number;
  sortBy: string;
  size: number;
  page: number;
}): Promise<{
  items: ItemType[];
  hasNext: boolean;
}> => {
  const response = await axiosInstance.get(
    `/items/members?x-coordinate=${xCoordinate}&y-coordinate=${yCoordinate}&sort-by=${sortBy}&size=${size}&page=${page}`
  );

  const data = response.data;

  return data;
};

export const createItem = async ({
  item,
}: {
  item: Omit<ItmePropsType, 'image'> & { image: File };
}): Promise<ItemType> => {
  const { image, ...itemReq } = item;

  const formData = new FormData();

  formData.append(
    'itemReq',
    new Blob([JSON.stringify(itemReq)], { type: 'application/json' })
  );

  formData.append(
    'image',
    image.size === undefined ? new Blob([], { type: 'image/jpeg' }) : image
  );

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
    const convertedFile = await convertUrlToFile(image);

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
    queryKey: itemKeys.item(itemId),
    queryFn: () => getItem({ itemId }),
  });
};

export const useGetStoreItems = ({
  storeId,
  size,
}: {
  storeId: string;
  size: number;
}) => {
  return useInfiniteScroll({
    queryKey: 'store-items',
    fetchData: pageParam => getStoreItems({ page: pageParam, size, storeId }),
  });
};

export const useGetMyStoreItems = ({
  size,
}: Pick<GetStoreItemsPropsType, 'size'>) => {
  return useInfiniteScroll({
    queryKey: 'my-store-items',
    fetchData: pageParam => getMyStoreItems({ page: pageParam, size }),
  });
};

export const useGetMemberItems = ({
  xCoordinate,
  yCoordinate,
  sortBy,
  size,
}: {
  xCoordinate: number;
  yCoordinate: number;
  sortBy: string;
  size: number;
}) => {
  return useInfiniteScroll({
    queryKey: `member-items-${xCoordinate}-${yCoordinate}-${sortBy}`,
    fetchData: pageParam =>
      getMemberItems({
        page: pageParam,
        size,
        sortBy,
        xCoordinate,
        yCoordinate,
      }),
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
