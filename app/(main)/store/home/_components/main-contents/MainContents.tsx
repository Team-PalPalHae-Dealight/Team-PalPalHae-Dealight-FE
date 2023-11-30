'use client';

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

  return (
    <>
      <BusinessStatus status={storeStatusInfo.storeStatus} />
      <HomeButton />
      <ProductList status={storeStatusInfo.storeStatus} />
    </>
  );
};

export default MainContents;
