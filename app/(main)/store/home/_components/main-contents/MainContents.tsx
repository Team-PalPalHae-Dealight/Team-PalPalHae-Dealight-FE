'use client';

import { useCallback, useEffect, useState } from 'react';
import BusinessStatus from '../business-status/BusinessStatus';
import HomeButton from '../home-buttons/HomeButton';
import ProductList from '../product-list/ProductList';
import { getStatus } from '../../_services/getStatus';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

const MainContents = () => {
  const [status, setStatus] = useState<'영업 중' | '영업 준비 중'>(
    '영업 준비 중'
  );
  const { storeId } = useUserInfo();

  const setStoreStatus = useCallback(async () => {
    const storeStatus = await getStatus(storeId);

    setStatus(storeStatus);
  }, [storeId]);

  useEffect(() => {
    setStoreStatus();
  }, [setStoreStatus]);

  return (
    <>
      <BusinessStatus status={status} setStatus={setStatus} />
      <HomeButton status={status} />
      <ProductList status={status} />
    </>
  );
};

export default MainContents;
