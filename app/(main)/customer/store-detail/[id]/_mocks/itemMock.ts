import { ItemType } from '@/app/_types/api/item';

export const ITEM_CARDS: ItemType[] = [
  {
    itemId: 1,
    storeId: 1,
    itemName: '떡볶이',
    stock: 2,
    discountPrice: 3000,
    originalPrice: 4500,
    description: '기본 떡볶이입니다.',
    image: 'https://picsum.photos/id/139/200/300.jpg',
    storeName: '동네분식',
    storeCloseTime: '20:00',
    storeAddress: {
      name: '서울특별시 성북구 안암로 145',
      xCoordinate: 127.0324773,
      yCoordinate: 37.5893876,
    },
  },
  {
    itemId: 2,
    storeId: 1,
    itemName: '치즈 김밥',
    stock: 4,
    discountPrice: 4000,
    originalPrice: 4500,
    description: '치즈 김밥 입니다.',
    image: 'https://picsum.photos/id/225/200/300.jpg',
    storeName: '동네분식',
    storeCloseTime: '20:00',
    storeAddress: {
      name: '서울특별시 성북구 안암로 145',
      xCoordinate: 127.0324773,
      yCoordinate: 37.5893876,
    },
  },
];
