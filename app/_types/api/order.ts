export type OrdersType = {
  orderId: number;
  storeId: number;
  memberId: number;
  memberNickName: string;
  storeName: string;
  demand: string;
  arrivalTime: string;
  orderProductsRes: {
    orderProducts: [
      {
        itemId: number;
        name: string;
        quantity: number;
        discountPrice: number;
        originalPrice: number;
        image: string;
      },
    ];
  };
  totalPrice: number;
  createdAt: string;
  status: string;
  reviewContains: boolean;
};
