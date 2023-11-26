'use client';

import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import TodayDealight from '@/app/(main)/customer/home/_components/TodayDealight';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import { useAddress } from '@/app/_providers/AddressProvider';
import useCoordinate from '@/app/_hooks/useCoordinate';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import { useState } from 'react';
import { ResponseItemTypes } from './_services/fetchData';

export default function Page() {
  const { address } = useAddress();
  const { lat, lng } = useCoordinate(address);
  const [storeLocation, setStoreLocation] = useState<ResponseItemTypes[]>();
  const location = storeLocation?.map(item => ({
    lat: item.storeAddress.xCoordinate,
    lng: item.storeAddress.yCoordinate,
    title: item.storeName,
  }));
  return (
    <>
      <CustomerHeader />
      <div className="mx-5">
        <div className="my-3 rounded">
          <KakaoMap
            currentPosition={{ lat, lng, title: '' }}
            height="30vh"
            positions={location}
          />
        </div>
        <div>
          <TodayDealight
            listName={'오늘의 딜라잇'}
            emptyWord={'상품이 존재하지 않습니다.'}
            lat={lat}
            lng={lng}
            setStoreLocation={setStoreLocation}
          />
        </div>
      </div>
      <CustomerFooter />
    </>
  );
}
