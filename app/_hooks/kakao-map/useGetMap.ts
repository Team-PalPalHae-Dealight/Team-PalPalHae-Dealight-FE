import { useEffect, useState } from 'react';

type UseGetMapPropsType = { lat: number; lng: number; positionCount: number };

const useGetMap = ({
  lat = 37.566826,
  lng = 126.9786567,
  positionCount,
}: UseGetMapPropsType) => {
  const [map, setMap] = useState<object>();

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: 3,
      };

      setMap(new window.kakao.maps.Map(container, options));
    });
  }, [lat, lng, positionCount]);

  return map as object;
};

export default useGetMap;
