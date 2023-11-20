'use client';
import { createContext, useContext, useState } from 'react';

type MyAddressPropTypes = {
  address: string;
  getAddress: (address: string) => void;
};

const AddressContext = createContext<MyAddressPropTypes | undefined>(undefined);

const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState('강남역 2번 출구');
  const getAddress = (address: string) => {
    setAddress(address);
  };
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

  return { address, setAddress: getAddress };
};
