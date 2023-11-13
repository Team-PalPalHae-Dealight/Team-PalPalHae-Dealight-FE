'use client';
import Cart from './assets/cart.svg';
import Search from './assets/search.svg';
import Link from 'next/link';
import pageRoute from '@/app/_constants/path';
import { useState } from 'react';
import AddressButton from '../AddressButton/AddressButton';
import { useLogin } from '@/app/_providers/auth';

const CustomerHeader = () => {
  const [address, setAddress] = useState('강남역 2번 출구');
  const { loggedin, loginToggle } = useLogin();
  const handleLogout = () => {
    loginToggle();
    //로컬스토리지 삭제 로직추가
  };

  return (
    <div className=" align-center space-between sticky box-border flex h-16 w-full justify-between rounded-b-2xl bg-yellow px-3 py-4">
      <div>
        <AddressButton getAddress={addressVal => setAddress(addressVal)}>
          {address}
        </AddressButton>
      </div>
      <div className="align-center flex ">
        <div>
          {loggedin ? (
            <span onClick={handleLogout}>로그아웃</span>
          ) : (
            <Link href={pageRoute.customer.login()}>
              <span>로그인</span>
            </Link>
          )}
        </div>
        <div className=" py-1">
          <Link href={pageRoute.customer.cart('1')}>
            <Cart className="ml-1 h-6  w-6" />
          </Link>
        </div>
        <div className=" py-1">
          <Link href={pageRoute.customer.search('')}>
            <Search className="ml-1 h-6  w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CustomerHeader;
