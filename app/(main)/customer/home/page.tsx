'use client';

import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';

export default function Page() {
  return (
    <h1>
      home
      <div>
        <KakaoMap
          onClickCurrentPosition={() => console.log('현재 위치 클릭')}
          onClickPosition={() => console.log('marker')}
          positions={[
            { lat: 33.450705, lng: 126.56956, title: '카카오' },
            { lat: 33.450936, lng: 126.569477, title: '생태연못' },
          ]}
        />
      </div>
    </h1>
  );
}
