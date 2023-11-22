'use client';

import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import TodayDealight from '@/app/(main)/customer/home/_components/TodayDealight';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import { useAddress } from '@/app/_providers/AddressProvider';
import useCoordinate from '@/app/_hooks/useCoordinate';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
// import fetchData from './fetchData';
// import { useEffect, useState } from 'react';

export default function Page() {
  const { address } = useAddress();
  const { lat, lng } = useCoordinate(address);

  /**
   * @todo
   * items의 storeAddress의 x,y값을 카카오 맵에 position으로 넘겨주어야 함
   */

  // const [storeLocation, setStoreLocation] = useState([]);

  // useEffect(() => {
  //   const getStoreData = async () => {
  //     const data = await fetchData({
  //       xCoordinate: lat,
  //       yCoordinate: lng,
  //       sortBy: 'distance',
  //       page: 0,
  //     }).then(res => {
  //       return res;
  //     });

  //     // console.log(
  //     //   data.items.forEach(item => {
  //     //     setStoreLocation([...storeLocation, item.storeAddress]);
  //     //   })
  //     // );
  //   };
  //   getStoreData();
  // }, [lat, lng, storeLocation]);
  return (
    <>
      <CustomerHeader />
      <div className="mx-5">
        <div className="my-3 rounded">
          <KakaoMap
            currentPosition={{ lat, lng, title: address }}
            height="30vh"
          />
        </div>
        <div>
          <TodayDealight
            listName={'오늘의 딜라잇'}
            emptyWord={'상품이 존재하지 않습니다.'}
            lat={lat}
            lng={lng}
          />
        </div>
      </div>
      <CustomerFooter />
    </>
  );
}
