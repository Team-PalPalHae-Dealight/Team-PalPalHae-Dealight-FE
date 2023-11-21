import { axiosInstance } from '@/app/_services/apiClient';

export type ResponseItemTypes = {
  itemId: number;
  storeId: number;
  itemName: string;
  stock: number;
  discountPrice: number;
  originalPrice: number;
  description: string;
  information: string;
  image: string;
  storeName: string;
  storeOpenTime: string;
  storeCloseTime: string;
  storeAddress: StoredAddressType;
};

type StoredAddressType = {
  name: string;
  xCoordinate: number;
  yCoordinate: number;
};

type FetchDataPropsType = {
  xCoordinate: number;
  yCoordinate: number;
  sortBy: string;
  page: number;
};

const fetchData = async ({
  xCoordinate,
  yCoordinate,
  sortBy,
  page,
}: FetchDataPropsType) => {
  const data = await axiosInstance
    .get(
      `/items/members?x-coordinate=${xCoordinate}&y-coordinate=${yCoordinate}&sort-by=${sortBy}&size=5&page=${page}`
    )
    .then(res => {
      return res.data.items;
    })
    .catch(err => console.log(err.message));

  return data;
};

export default fetchData;
