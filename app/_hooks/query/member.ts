import { axiosInstance } from '@/app/_services/apiClient';
import { customError } from '@/app/_utils/erorr';
import { useMutation } from '@tanstack/react-query';

export const reviewKeys = {
  member: () => ['user-info'] as const,
};

type UpdateMemberAddressType = {
  name: string;
  xCoordinate: number;
  yCoordinate: number;
};

type PatchMyProfileType = {
  nickName: string;
  phoneNumber: string;
  address: {
    name: string;
    xCoordinate: number;
    yCoordinate: number;
  };
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

export const patchMyProfile = async ({
  userInfo,
}: {
  userInfo: PatchMyProfileType;
}): Promise<PatchMyProfileType> => {
  try {
    const { nickName, phoneNumber, address } = userInfo;
    return await axiosInstance.patch('/members/profiles', {
      nickname: nickName,
      phoneNumber: phoneNumber,
      address: address,
    });
  } catch (error) {
    throw new Error(customError(error));
  }
};

export const useUpdateMemberAddress = () => {
  return useMutation({ mutationFn: updateMemberAddress });
};

export const usePatchMyProfile = () => {
  return useMutation({ mutationFn: patchMyProfile });
};
