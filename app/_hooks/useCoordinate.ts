// import { useState } from 'react';

// const useCoordinate = async (address: string) => {
//   const [coordinate, setCoordinate] = useState([0, 0]);

//   const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`;

//   const mapInfo = await fetch(url, {
//     method: 'GET',
//     headers: {
//       Authorization: `${process.env.KAKAO_MAP_KEY}`,
//     },
//   });

//   //const latitude = mapInfo.data.documents[0].address.y;
//   //const longitude = mapInfo.data.documents[0].address.x;

//   console.log(mapInfo);
//   //console.log(latitude);
//   //console.log(longitude);

//   //setCoordinate([longitude, latitude]);

//   return coordinate;
// };

// export default useCoordinate;
