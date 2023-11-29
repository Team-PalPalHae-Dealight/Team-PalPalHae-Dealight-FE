'use client';

import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import TodayDealight from '@/app/(main)/customer/home/_components/TodayDealight';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useGetMemberItems } from '@/app/_hooks/query/item';
import { DropDownTextType } from './_components/TodayDealightDropDown';
import { useState } from 'react';

export default function Page() {
  const { address } = useUserInfo();
  const [sortBy, setSortBy] = useState<DropDownTextType>('distance');

  const {
    data: memberItems,
    ref,
    isFetchingNextPage,
  } = useGetMemberItems({
    size: 5,
    sortBy,
    xCoordinate: address.xCoordinate,
    yCoordinate: address.yCoordinate,
  });

  const location = memberItems.map(item => ({
    lng: item.storeAddress.xCoordinate,
    lat: item.storeAddress.yCoordinate,
    title: item.storeName,
  }));

  return (
    <>
      <CustomerHeader />

      <div className="mx-5">
        <div className="my-4 rounded">
          <KakaoMap
            currentPosition={{
              lng: address.xCoordinate,
              lat: address.yCoordinate,
              title: '',
            }}
            height="30vh"
            positions={location}
          />
        </div>

        <div>
          <TodayDealight
            memberItems={memberItems}
            refNode={ref}
            sortBy={sortBy}
            setSortBy={setSortBy}
            isFetchingNextPage={isFetchingNextPage}
          />
        </div>
      </div>

      <CustomerFooter />
    </>
  );
}
