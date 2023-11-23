'use client';

import { useState } from 'react';
import BusinessStatus from '../business-status/BusinessStatus';
import HomeButton from '../home-buttons/HomeButton';
import ProductList from '../product-list/ProductList';

const MainContents = () => {
  const [status, setStatus] = useState<'영업 중' | '영업 준비 중'>(
    '영업 준비 중'
  );

  return (
    <main className="mt-2 flex flex-col items-center px-5">
      <BusinessStatus setStatus={setStatus} />
      <HomeButton />
      <ProductList status={status} />
    </main>
  );
};

export default MainContents;
