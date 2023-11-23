import { axiosInstance } from '@/app/_services/apiClient';

export type ResponseItemTypes = {
  itemId: number;
  storeId: number;
  itemName: string;
  stock: number;
  discountPrice: number;
  originalPrice: number;
  description: string;
  image: string;
  storeName: string;
  storeCloseTime: string;
  storeAddress: StoreAddressType;
};

type StoreAddressType = {
  name: string;
  xCoordinate: number;
  yCoordinate: number;
};

const getItemList = async (page: number) => {
  const url = `/items/stores?size=5&page=${page}`;

  const data = await axiosInstance
    .get(url)
    .then(res => {
      return res.data.items;
    })
    .catch(err => console.error(err.message));

  return data;
};

export default getItemList;
