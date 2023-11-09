import { useEffect, useState } from 'react';

type UseGetMapPropsType = { lat: number; lng: number };

const useGetMap = ({
  lat = 37.566826,
  lng = 126.9786567,
}: UseGetMapPropsType) => {
  const [map, setMap] = useState<React.ReactNode>();

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3,
        };

        setMap(new window.kakao.maps.Map(container, options));
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
  }, [lat, lng]);

  return map;
};

export default useGetMap;
