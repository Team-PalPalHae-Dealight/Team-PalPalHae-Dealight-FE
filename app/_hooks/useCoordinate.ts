import { useState, useEffect } from 'react';

const useCoordinate = (address: string) => {
  const [coords, setCoords] = useState([0, 0]);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      geocoder.addressSearch(address, function (result: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          setCoords([Number(result[0].x), Number(result[0].y)]);
        }
      });
    });
  }, [address]);
  return coords;
};

export default useCoordinate;
