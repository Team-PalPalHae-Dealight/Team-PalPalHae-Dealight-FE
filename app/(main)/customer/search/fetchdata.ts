export type ResponseItemTypes = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
import { axiosInstance } from '@/app/_services/apiClient';
type RequestItemPropTypes = {
  lat: number;
  lng: number;
  sortBy: string;
  page: number;
  size: number;
};
/*
x-coordinate
경도
y-coordinate
위도
sort-by
정렬 기준
size
한 페이지 당 상품 목록 개수
page
*/

const fetchData = async ({
  lat,
  lng,
  sortBy,
  page,
  size,
}: RequestItemPropTypes) => {
  console.log(`x-coordinate=${lat}&y-coordinate=${lng}`);
  const url = `/items/members?x-coordinate=${lat}&y-coordinate=${lng}&sort-by=${sortBy}&size=${size}&page=${page}`;
  try {
    const res = await axiosInstance.get(url);
    console.log('res', res);
  } catch (error) {
    console.error('Error: ', error);
    return null;
  }
};

export default fetchData;
