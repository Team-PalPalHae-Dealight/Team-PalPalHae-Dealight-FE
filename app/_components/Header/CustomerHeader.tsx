'use client';

import SearchIcon from '../../_assets/svgs/search-icon.svg';
import CartIcon from '../../_assets/svgs/cart-icon.svg';
import Link from 'next/link';
import pageRoute from '@/app/_constants/path';
import AddressButton from '../AddressButton/AddressButton';
import Triangle from './assets/triangle.svg';
import dynamic from 'next/dynamic';
import { useAuth } from '@/app/_providers/AuthProvider';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/app/_services/apiClient';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
const LoginHeader = dynamic(() => import('./LoginHeader'), { ssr: false });

const CustomerHeader = () => {
  const { loggedIn } = useAuth();
  const state = useUserInfo();
  const [address, setAddress] = useState(
    loggedIn && state.address && state.address.name
      ? state.address.name
      : '강남역 2번 출구'
  );
  const { lat, lng } = useCoordinate(address);

  useEffect(() => {
    const updateAddress = async () => {
      try {
        const res = await axiosInstance.patch('/members/addresses', {
          name: address,
          xCoordinate: lat,
          yCoordinate: lng,
        });
        console.log('결괏값', res);
      } catch (error) {
        console.error(error);
      }
    };
    updateAddress();
  }, [address, lat, lng]);
  return (
    <div className="align-center space-between text-l sticky top-0 z-50 box-border flex h-16 w-full justify-between border-b-1 border-dark-gray/30 bg-light-gray px-3 py-4 font-semibold text-black">
      <div className="flex flex-row items-center">
        <div>
          <AddressButton
            getAddress={addressVal => {
              setAddress(addressVal);
            }}
          >
            <div className="flex flex-row">
              <div className=" w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                {loggedIn ? address : '강남역2번 출구'}
              </div>
              <div>
                <Triangle className="h-6 w-6 px-1 py-1.5" />
              </div>
            </div>
          </AddressButton>
        </div>
      </div>
      <div className="flex items-center">
        <LoginHeader />
        <Link className="mr-3" href={pageRoute.customer.search('')}>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow">
            <SearchIcon className="h-4 w-4" />
          </div>
        </Link>
        <Link href={pageRoute.customer.cart('1')}>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow">
            <CartIcon className="h-4 w-4" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CustomerHeader;
