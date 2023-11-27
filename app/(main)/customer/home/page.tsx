'use client';

import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import TodayDealight from '@/app/(main)/customer/home/_components/TodayDealight';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

export default function Page() {
  const { address } = useUserInfo();

  return (
    <>
      <CustomerHeader />

      <div className="mx-5">
        <div className="my-3 rounded">
          <KakaoMap
            currentPosition={{
              lng: address.xCoordinate,
              lat: address.yCoordinate,
              title: address.name,
            }}
            height="30vh"
          />
        </div>

        <div>
          <TodayDealight lng={address.xCoordinate} lat={address.yCoordinate} />
        </div>
      </div>

      <CustomerFooter />
    </>
  );
}
