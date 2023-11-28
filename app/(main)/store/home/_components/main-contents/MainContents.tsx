'use client';

import { useState } from 'react';
import BusinessStatus from '../business-status/BusinessStatus';
import HomeButton from '../home-buttons/HomeButton';
import ProductList from '../product-list/ProductList';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useGetStoreStatusInfo } from '@/app/_hooks/query/store';

const MainContents = () => {
  const { storeId } = useUserInfo();

  const { data: storeStatusInfo } = useGetStoreStatusInfo({
    storeId: String(storeId!),
  });

  const [status, setStatus] = useState<'영업 중' | '영업 준비 중'>(
    storeStatusInfo.storeStatus
  );

  return (
    <>
      <BusinessStatus status={status} setStatus={setStatus} />
      <HomeButton status={status} />
      <ProductList status={status} />
    </>
  );
};

export default MainContents;
