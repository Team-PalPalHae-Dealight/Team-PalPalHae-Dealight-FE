'use client';

import useGetMarker from '@/app/_hooks/kakao-map/useGetMarker';
import useGetMap from '@/app/_hooks/kakao-map/useGetMap';
import useGetCurrentMarker from '@/app/_hooks/kakao-map/useGetCurrentMarker';

type KakaoMapPropsType = {
  width?: string;
  height?: string;
  currentPosition?: { lat: number; lng: number; title: string };
  positions?: { lat: number; lng: number; title: string }[];
  onClickCurrentPosition?: () => void;
  onClickPosition?: () => void;
};

const KakaoMap = ({
  width = '100%',
  height = '140px',
  currentPosition = {
    lat: 33.450701,
    lng: 126.570667,
    title: '현재 장소',
  },
  positions = [],
  onClickCurrentPosition,
  onClickPosition,
}: KakaoMapPropsType) => {
  const map = useGetMap({ lat: currentPosition.lat, lng: currentPosition.lng });

  useGetCurrentMarker({ currentPosition, map, onClickCurrentPosition });
  useGetMarker({ positions, map, onClickPosition });

  return (
    <div className="w-full">
      <div id="map" style={{ width: `${width}`, height: `${height}` }} />
    </div>
  );
};

export default KakaoMap;
