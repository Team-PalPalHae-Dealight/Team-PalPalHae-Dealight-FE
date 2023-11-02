'use client';

import { useEffect } from 'react';

type KakaoMapPropsType = {
  width?: string;
  height?: string;
  lat?: number;
  lng?: number;
};

const KakaoMap = ({
  width = '100%',
  height = '140px',
  lat = 37.566826,
  lng = 126.9786567,
}: KakaoMapPropsType) => {
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: 3,
      };

      new window.kakao.maps.Map(container, options);
    });
  }, [lat, lng]);

  return (
    <div className="w-full">
      <div id="map" style={{ width: `${width}`, height: `${height}` }} />
    </div>
  );
};

export default KakaoMap;
