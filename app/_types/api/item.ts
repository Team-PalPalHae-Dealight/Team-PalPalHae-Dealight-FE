export type ItemType = {
  itemId: number;
  storeId: number;
  itemName: string;
  stock: number;
  discountPrice: number;
  originalPrice: number;
  description: string;
  image: File | string;
  storeName: string;
  storeCloseTime: string;
  storeAddress: {
    name: string;
    xCoordinate: number;
    yCoordinate: number;
  };
};
