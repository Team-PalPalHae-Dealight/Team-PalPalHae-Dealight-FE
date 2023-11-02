import { useCallback, useEffect } from 'react';

type UseGetCurrentMarkerPropsType = {
  currentPosition: { lat: number; lng: number; title: string };
  map: object;
  onClickCurrentPosition?: () => void;
};

const useGetCurrentMarker = ({
  currentPosition,
  map,
  onClickCurrentPosition,
}: UseGetCurrentMarkerPropsType) => {
  const { lat, lng, title } = currentPosition;

  const onClick = useCallback(() => {
    if (onClickCurrentPosition) {
      onClickCurrentPosition();
    }
  }, [onClickCurrentPosition]);

  useEffect(() => {
    if (map === undefined) return;
    const mapPosition = new window.kakao.maps.LatLng(lat, lng);

    const marker = new window.kakao.maps.Marker({
      title,
      position: mapPosition,
      clickable: true,
    });

    marker.setMap(map);
    const iwContent = `<div style="padding:1px; background: white;">${title}</div>`;
    const iwPosition = new window.kakao.maps.LatLng(lat, lng);

    const customOverlay = new window.kakao.maps.CustomOverlay({
      position: iwPosition,
      content: iwContent,
      yAnchor: 0,
    });

    customOverlay.setMap(map);

    window.kakao.maps.event.addListener(marker, 'click', onClick);

    return () => {
      window.kakao.maps.event.removeListener(marker, 'click', onClick);
    };
  }, [map, lat, lng, title, onClick]);
};

export default useGetCurrentMarker;
