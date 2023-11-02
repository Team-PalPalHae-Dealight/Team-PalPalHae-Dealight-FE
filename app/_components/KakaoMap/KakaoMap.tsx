'use client';

import useGetMarker from '@/app/_hooks/kakao-map/useGetMakers';
import useGetMap from '@/app/_hooks/kakao-map/useGetMap';

type KakaoMapPropsType = {
  width?: string;
  height?: string;
  lat?: number;
  lng?: number;
  positions?: { lat: number; lng: number; title: string }[];
};

const KakaoMap = ({
  width = '100%',
  height = '140px',
  lat = 33.450701,
  lng = 126.570667,
  positions = [
    // { lat: 33.450705, lng: 126.56956, title: '카카오' },
    { lat: 33.450936, lng: 126.569477, title: '생태연못' },
  ],
}: KakaoMapPropsType) => {
  const map = useGetMap({ lat, lng, positionCount: positions.length });
  useGetMarker({ positions, map });

  return (
    <div className="w-full">
      <div id="map" style={{ width: `${width}`, height: `${height}` }} />
    </div>
  );
};

export default KakaoMap;
