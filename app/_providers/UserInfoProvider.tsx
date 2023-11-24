'use client';

import { useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import { axiosInstance } from '../_services/apiClient';
import { useAuth } from './AuthProvider';
import LocalStorage from '../_utils/localstorage';

type AddressPropstype = {
  name: string | null;
  xCoordinate: number | null;
  yCoordinate: number | null;
};

type DefaultContextType = {
  providerId: number | null;
  storeId: number | null;
  nickName: string | null;
  role: 'store' | 'member' | null;
  realName: string | null;
  phoneNumber: number | null;
  address: AddressPropstype | null;
} | null;

const UserInfoContext = createContext<DefaultContextType>(null);

async function getUser(): Promise<DefaultContextType> {
  const data = await axiosInstance
    .get(`${process.env.NEXT_PUBLIC_API_URL}/members/profiles`)
    .then(res => res.data);

  const {
    nickName,
    providerId,
    role,
    realName,
    phoneNumber,
    address: { name, xCoordinate, yCoordinate },
  } = data;

  let storeId = null;

  if (role === 'store') {
    storeId = await axiosInstance
      .get(`${process.env.NEXT_PUBLIC_API_URL}/stores/confirm`)
      .then(res => res.data.storeId);
  }
  console.log('api called');
  /**
   * @description role에 고객 or 업체가 들어온다. 이 값을 통해 라우팅 처리가 이루어지게 된다.
   */
  return {
    role,
    nickName,
    providerId,
    storeId,
    realName,
    phoneNumber,
    address: { name, xCoordinate, yCoordinate },
  };
}

export const UserInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { logout } = useAuth();

  /**
   * @todo 유저 정보를 불러오는 api 함수 작성 예정
   */

  const { data: userInfo, isError } = useQuery({
    queryKey: ['user-info'],
    queryFn: getUser,
    initialData: {
      nickName: null,
      role: null,
      storeId: null,
      providerId: null,
      realName: null,
      phoneNumber: null,
      address: { name: null, xCoordinate: null, yCoordinate: null },
    },
    enabled:
      !!LocalStorage.getItem('dealight-accessToken') ||
      !!LocalStorage.getItem('dealight-refreshToken'),
  });

  if (isError) {
    logout();
  }

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const state = useContext(UserInfoContext);

  if (!state) {
    throw new Error('useUserInfo must be used within a UserInfo');
  }

  return state;
};
