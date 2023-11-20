'use client';

import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import TodayDealight from '@/app/(main)/customer/home/_components/TodayDealight';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import Footer from '@/app/_components/Footer/Footer';
import { useAddress } from '@/app/_providers/AddressProvider';

export default function Page() {
  const { address } = useAddress();
  return (
    <>
      <CustomerHeader />
      <div className="mx-5">
        <div className="my-3 rounded">
          <KakaoMap
            onClickCurrentPosition={() =>
              console.log(`현재 위치 클릭:${address}`)
            }
            onClickPosition={() => console.log('marker', address)}
            positions={[
              { lat: 33.450705, lng: 126.56956, title: '카카오' },
              { lat: 33.450936, lng: 126.569477, title: '생태연못' },
            ]}
          />
        </div>
        <div>
          <TodayDealight
            listName={'오늘의 딜라잇'}
            emptyWord={'상품이 존재하지 않습니다.'}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
