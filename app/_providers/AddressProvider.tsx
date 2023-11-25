'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { axiosInstance } from '@/app/_services/apiClient';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import useCoordinate from '@/app/_hooks/useCoordinate';

type MyAddressPropTypes = {
  address: string;
  getAddress: (address: string) => void;
};

const AddressContext = createContext<MyAddressPropTypes | undefined>(undefined);

const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const state = useUserInfo();
  const [address, setAddress] = useState(
    state.address.name ? state.address.name : '강남역 2번 출구'
  );
  const { lng, lat } = useCoordinate(address);
  const getAddress = (address: string) => {
    setAddress(address);
  };

  useEffect(() => {
    if (!state || !state.address || !state.address.name) return;
    if (state.role === null) return;
    const updateAddress = async () => {
      try {
        const res = await axiosInstance.patch('/members/addresses', {
          name: address,
          xCoordinate: lng,
          yCoordinate: lat,
        });
        console.log(res, 'activatead');
      } catch (error) {
        console.error('에러', error);
      }
    };
    updateAddress();
  }, [address, lat, lng, state]);
  return (
    <AddressContext.Provider value={{ address, getAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export { AddressContext, AddressProvider };

export const useAddress = () => {
  const context = useContext(AddressContext);

  if (!context) {
    throw new Error('useAddress must be used within a AddressProvider');
  }

  const { address, getAddress } = context;

  if (!address) {
    throw new Error('주솟값 확인하세요!');
  }

  return { address, getAddress };
};
