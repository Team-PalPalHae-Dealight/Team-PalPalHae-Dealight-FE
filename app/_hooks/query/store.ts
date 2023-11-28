import { axiosInstance } from '@/app/_services/apiClient';
import { StoreType } from '@/app/_types/api/store';
import { MyStoreInfo } from '@/app/_types/store/storeType';
import { customError } from '@/app/_utils/erorr';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const storeKeys = {
  store: (storeId: string) => ['store', storeId] as const,
  myStore: () => ['store'] as const,
  status: (storeId: string) => ['store-status', storeId] as const,
};

type GetStorePropsType = {
  storeId: string;
};

type PatchStoreProfilePropsType = {
  telephone: string;
  addressName: string;
  xCoordinate: number;
  yCoordinate: number;
  openTime: string;
  closeTime: string;
  dayOff: string[];
};

export const getStore = async ({
  storeId,
}: GetStorePropsType): Promise<StoreType> => {
  const response = await axiosInstance.get(`/stores/details/${storeId}`);

  const data = response.data;

  return data;
};

export const getMyStore = async (): Promise<MyStoreInfo> => {
  const response = await axiosInstance.get(`/stores/profiles`);

  const data = response.data;

  return data;
};

export const getStoreStatusInfo = async ({
  storeId,
}: GetStorePropsType): Promise<{
  storeId: number;
  storeStatus: '영업 중' | '영업 준비 중';
}> => {
  const response = await axiosInstance.get(`/stores/status/${storeId}`);

  const data = response.data;

  return data;
};

export const patchStoreProfile = async ({
  storeId,
  storeInfo,
}: {
  storeInfo: PatchStoreProfilePropsType;
  storeId: number | null;
}): Promise<StoreType> => {
  try {
    return await axiosInstance.patch(`/stores/profiles/${storeId}`, {
      storeInfo,
    });
  } catch (error) {
    throw new Error(customError(error));
  }
};

export const useGetStore = ({ storeId }: GetStorePropsType) => {
  return useSuspenseQuery({
    queryKey: storeKeys.store(storeId),
    queryFn: () => getStore({ storeId }),
  });
};

export const useGetMyStore = () => {
  return useSuspenseQuery({
    queryKey: storeKeys.myStore(),
    queryFn: getMyStore,
  });
};

export const useGetStoreStatusInfo = ({ storeId }: GetStorePropsType) => {
  return useSuspenseQuery({
    queryKey: storeKeys.status(storeId),
    queryFn: () => getStoreStatusInfo({ storeId }),
  });
};

export const usePatchStoreProfile = () => {
  return useMutation({
    mutationFn: patchStoreProfile,
  });
};
