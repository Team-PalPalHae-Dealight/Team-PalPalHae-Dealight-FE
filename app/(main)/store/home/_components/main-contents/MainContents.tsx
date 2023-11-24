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
    <>
      <BusinessStatus setStatus={setStatus} />
      <HomeButton status={status} />
      <ProductList status={status} />
    </>
  );
};

export default MainContents;
