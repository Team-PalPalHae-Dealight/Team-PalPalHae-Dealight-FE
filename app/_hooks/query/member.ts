import { axiosInstance } from '@/app/_services/apiClient';
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

export const getMyProfile = async () => {
  const response = await axiosInstance.get('/members/profiles');

  const data = response.data;

  return data;
};

export const useGetMyProfile = () => {
  return useSuspenseQuery({
    queryKey: ['my-profile'],
    queryFn: () => getMyProfile(),
  });
};

export const useUpdateMemberAddress = () => {
  return useMutation({ mutationFn: updateMemberAddress });
};

export const usePatchMyProfile = () => {
  return useMutation({ mutationFn: patchMember });
};
