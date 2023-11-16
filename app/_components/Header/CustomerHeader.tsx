'use client';

import Cart from './assets/cart.svg';
import Search from './assets/search.svg';
import Link from 'next/link';
import pageRoute from '@/app/_constants/path';
import { useState } from 'react';
import AddressButton from '../AddressButton/AddressButton';
import Triangle from './assets/triangle.svg';
import dynamic from 'next/dynamic';

const LoginHeader = dynamic(() => import('./LoginHeader'), { ssr: false });

const CustomerHeader = () => {
  const [address, setAddress] = useState('강남역 2번 출구');

  return (
    <div className="align-center space-between text-l sticky box-border flex h-16 w-full justify-between rounded-b-2xl bg-yellow px-3 py-4 font-semibold text-black">
      <div className="flex flex-row">
        <div>
          <AddressButton getAddress={addressVal => setAddress(addressVal)}>
            <div className="flex flex-row">
              <div>{address}</div>
              <div>
                <Triangle className="h-6 w-6 px-1 py-1.5" />
              </div>
            </div>
          </AddressButton>
        </div>
      </div>
      <div className="align-center flex">
        <LoginHeader />

        <div className="py-1">
          <Link href={pageRoute.customer.search('')}>
            <Search className="ml-1 h-6 w-6" />
          </Link>
        </div>
        <div className="py-1">
          <Link href={pageRoute.customer.cart('1')}>
            <Cart className="ml-1 h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerHeader;
