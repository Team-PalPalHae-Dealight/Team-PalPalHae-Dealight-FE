'use client';

import StartLink from './_components/main-temp/StartLink';
import Banner from './_assets/images/banner.png';
import Image from 'next/image';
import ServiceIntro from './_components/main-temp/ServiceIntro';
import KakaoMap from './_components/KakaoMap/KakaoMap';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <Image src={Banner} priority alt="banner" />
      <KakaoMap
        onClickCurrentPosition={() => console.log('현재 위치 클릭')}
        onClickPosition={() => console.log('marker')}
        positions={[
          { lat: 33.450705, lng: 126.56956, title: '카카오' },
          { lat: 33.450936, lng: 126.569477, title: '생태연못' },
        ]}
      />
      <StartLink />
      <ServiceIntro />
    </main>
  );
}
