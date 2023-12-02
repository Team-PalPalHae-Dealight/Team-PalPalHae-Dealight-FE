import { CartType } from '../_types/CartType';

export const sumTotalPrice = (data: CartType[]) => {
  let sum = 0;
  let count = 0;

  data.map((item: CartType) => {
    const price = item.discountPrice * item.quantity;

    sum += price;
    count += item.quantity;
  });

  const total = {
    totalPrice: sum,
    totalCount: count,
  };
  return total;
};
