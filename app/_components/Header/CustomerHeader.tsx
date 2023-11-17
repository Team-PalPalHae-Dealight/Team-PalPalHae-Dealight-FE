'use client';
import Cart from './assets/cart.svg';
import Search from './assets/search.svg';
import Link from 'next/link';
import pageRoute from '@/app/_constants/path';
import { useState } from 'react';
import AddressButton from '../AddressButton/AddressButton';
import { useLogin } from '@/app/_providers/auth';
import Triangle from './assets/triangle.svg';

const CustomerHeader = () => {
  const [address, setAddress] = useState('강남역 2번 출구');
  const { loggedin } = useLogin();

  return (
    <div className="text-l sticky z-20 flex h-16 w-full flex-row items-center justify-between rounded-b-2xl bg-yellow px-3 py-4 font-semibold text-black">
      <div className="flex  items-center ">
        <AddressButton getAddress={addressVal => setAddress(addressVal)}>
          <div className="flex flex-row">
            <div>{address}</div>
            <div>
              <Triangle className="h-6 w-6 px-1  py-1.5" />
            </div>
          </div>
        </AddressButton>
      </div>

      <div className="flex  items-center ">
        <div>
          {loggedin ? (
            <div></div>
          ) : (
            <Link href={pageRoute.customer.login()}>
              <span>로그인</span>
            </Link>
          )}
        </div>

        <div className=" py-2">
          <Link href={pageRoute.customer.search('')}>
            <Search className=" h-6  w-6 px-1  py-1" />
          </Link>
        </div>
        <div className=" py-2">
          <Link href={pageRoute.customer.cart('1')}>
            <Cart className=" h-6  w-6  py-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerHeader;
