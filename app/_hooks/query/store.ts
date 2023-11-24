import { axiosInstance } from '@/app/_services/apiClient';
import { StoreType } from '@/app/_types/api/store';
import { useQuery } from '@tanstack/react-query';

export const storeKeys = {
  store: (storeId: string) => ['store', storeId] as const,
  myStore: () => ['store'] as const,
};

type GetStorePropsType = {
  storeId: string;
};

export const getStore = async ({
  storeId,
}: GetStorePropsType): Promise<StoreType> => {
  const response = await axiosInstance.get(`/stores/profiles/${storeId}`);

  const data = response.data;

  return data;
};

export const getMyStore = async (): Promise<StoreType> => {
  const response = await axiosInstance.get(`/stores/profiles`);

  const data = response.data;

  return data;
};

export const useGetStore = ({ storeId }: GetStorePropsType) => {
  return useQuery({
    queryKey: storeKeys.store(storeId),
    queryFn: () => getStore({ storeId }),
  });
};

export const useGetMyStore = () => {
  return useQuery({
    queryKey: storeKeys.myStore(),
    queryFn: getMyStore,
  });
};
