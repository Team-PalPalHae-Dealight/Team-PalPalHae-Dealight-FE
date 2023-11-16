import { Document } from '../_types/kakaoMap';

const useCoordinate = (address: string) => {
  const kakaoMapScript = document.createElement('script');
  kakaoMapScript.async = false;
  kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false&libraries=services`;
  document.head.appendChild(kakaoMapScript);

  if (window.kakao) {
    const geocoder = new window.kakao.maps.services.Geocoder();

    const mapInformation = new Promise((resolve, reject) => {
      geocoder.addressSearch(
        address,
        function (result: Document[], status: 'OK' | 'ZERO_RESULT' | 'ERROR') {
          if (status === window.kakao.maps.services.Status.OK) {
            resolve(result);
          } else {
            reject(status);
          }
        }
      );
    });
    return mapInformation;
  }
};

export default useCoordinate;
