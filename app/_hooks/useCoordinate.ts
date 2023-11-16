import { useEffect, useState } from 'react';
import { Document } from '../_types/kakaoMap';

const useCoordinate = (address: string) => {
  const [coords, setCoords] = useState([0, 0]);

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          address,
          function (
            result: Document[],
            status: 'OK' | 'ZERO_RESULT' | 'ERROR'
          ) {
            if (status === window.kakao.maps.services.Status.OK) {
              setCoords([Number(result[0].x), Number(result[0].y)]);
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
