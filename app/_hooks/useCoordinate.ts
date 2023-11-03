import { useState, useEffect } from 'react';
import { Document } from '../_types/kakaoMap';

const useCoordinate = (address: string) => {
  const [coords, setCoords] = useState([0, 0]);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        address,
        function (result: Document[], status: 'OK' | 'ZERO_RESULT' | 'ERROR') {
          if (status === window.kakao.maps.services.Status.OK) {
            setCoords([Number(result[0].x), Number(result[0].y)]);
          }
        }
      );
    });
  }, [address]);
  return coords;
};

export default useCoordinate;
