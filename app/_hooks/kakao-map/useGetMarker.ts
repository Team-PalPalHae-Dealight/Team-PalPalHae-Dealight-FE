import { useEffect } from 'react';

const IMAGE_MARKER_URL =
  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

type UseGetMarkerPropsType = {
  positions: { lat: number; lng: number; title: string }[];
  map: object;
};

const useGetMarker = ({ positions, map }: UseGetMarkerPropsType) => {
  useEffect(() => {
    if (map === undefined) return;

    positions.forEach(({ lat, lng, title }) => {
      const mapPosition = new window.kakao.maps.LatLng(lat, lng);

      const imageSize = new window.kakao.maps.Size(24, 35);
      const markerImage = new window.kakao.maps.MarkerImage(
        IMAGE_MARKER_URL,
        imageSize
      );

      const marker = new window.kakao.maps.Marker({
        title,
        position: mapPosition,
        image: markerImage,
      });

      marker.setMap(map);
    });
  }, [map, positions]);
};

export default useGetMarker;
