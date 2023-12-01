'use client';

import BusinessStatus from '../business-status/BusinessStatus';
import HomeButton from '../home-buttons/HomeButton';
import ProductList from '../product-list/ProductList';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useGetStoreStatusInfo } from '@/app/_hooks/query/store';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

const MainContents = () => {
  const { storeId } = useUserInfo();
  const queryClient = useQueryClient();

  const { data: storeStatusInfo } = useGetStoreStatusInfo({
    storeId: String(storeId!),
  });

  useEffect(() => {
    if (storeStatusInfo.storeStatus === '영업 준비 중') {
      queryClient.removeQueries({ queryKey: ['infinite', 'my-store-items'] });
    }
  }, [storeStatusInfo.storeStatus, queryClient]);

  return (
    <>
      <BusinessStatus status={storeStatusInfo.storeStatus} />
      <HomeButton />
      <ProductList status={storeStatusInfo.storeStatus} />
    </>
  );
};

export default MainContents;
