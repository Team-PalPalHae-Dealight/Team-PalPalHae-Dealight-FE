'use client';

import BusinessStatus from './_components/business-status/BusinessStatus';
import HomeButton from './_components/home-buttons/HomeButton';
import ProductList from './_components/product-list/ProductList';
import Header from '@/app/_components/Header/Header';
import { useState } from 'react';
import StoreFooter from '@/app/_components/Footer/StoreFooter';

export default function Page() {
  const [status, setStatus] = useState<'영업 중' | '영업 준비 중' | ''>('');

  return (
    <>
      <Header />
      <main className="mt-2 flex flex-col items-center px-5">
        <BusinessStatus setStatus={setStatus} />
        <HomeButton />
        <ProductList status={status} />
      </main>
      <StoreFooter />
    </>
  );
}
