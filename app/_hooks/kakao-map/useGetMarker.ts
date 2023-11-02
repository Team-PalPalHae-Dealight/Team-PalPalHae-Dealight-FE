import { useCallback, useEffect } from 'react';

const IMAGE_MARKER_URL =
  'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

type UseGetMarkerPropsType = {
  positions: { lat: number; lng: number; title: string }[];
  map: object;
  onClickPosition?: () => void;
};

const useGetMarker = ({
  positions,
  map,
  onClickPosition,
}: UseGetMarkerPropsType) => {
  const onClick = useCallback(() => {
    if (onClickPosition) {
      onClickPosition();
    }
  }, [onClickPosition]);

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
        clickable: true,
      });

      marker.setMap(map);

      window.kakao.maps.event.addListener(marker, 'click', onClick);

      return () => {
        window.kakao.maps.event.removeListener(marker, 'click', onClick);
      };
    });
  }, [map, positions, onClick]);
};

export default useGetMarker;
