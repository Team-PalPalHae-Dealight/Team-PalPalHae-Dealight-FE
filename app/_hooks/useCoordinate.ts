import { useEffect, useState } from 'react';
import { Document } from '../_types/kakaoMap';

const useCoordinate = (address: string) => {
  const [coords, setCoords] = useState({
    lat: 37.4981646510326,
    lng: 127.028307900881,
  });

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          address === '' ? '서울 강남구 강남대로 지하 396' : address,
          function (
            result: Document[],
            status: 'OK' | 'ZERO_RESULT' | 'ERROR'
          ) {
            if (status === window.kakao.maps.services.Status.OK) {
              setCoords({ lat: Number(result[0].y), lng: Number(result[0].x) });
            }
          }
        );
      });
    };
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
  }, [address]);

  return coords;
};

export default useCoordinate;
