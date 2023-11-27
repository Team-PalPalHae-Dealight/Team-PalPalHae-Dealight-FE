import { axiosInstance } from '@/app/_services/apiClient';
import { getMember } from '@/app/_services/member/getMember';
import { patchMember } from '@/app/_services/member/patchMember';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const reviewKeys = {
  member: () => ['user-info'] as const,
};

type UpdateMemberAddressType = {
  name: string;
  xCoordinate: number;
  yCoordinate: number;
};

export const updateMemberAddress = async ({
  name,
  xCoordinate,
  yCoordinate,
}: UpdateMemberAddressType): Promise<UpdateMemberAddressType> => {
  const response = await axiosInstance.patch(`/members/addresses`, {
    name,
    xCoordinate,
    yCoordinate,
  });

  const data = response.data;

  return data;
};

export const useUpdateMemberAddress = () => {
  return useMutation({ mutationFn: updateMemberAddress });
};

export const useGetMember = () => {
  return useSuspenseQuery({
    queryKey: ['user-info'],
    queryFn: () => getMember(),
  });
};

export const usePatchMember = () => {
  return useMutation({ mutationFn: patchMember });
};
