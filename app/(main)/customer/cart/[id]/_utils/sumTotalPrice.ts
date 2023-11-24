import { CartType } from '../_types/CartType';

export const sumTotalPrice = (props: { data: CartType[] | undefined }) => {
  let sum = 0;
  let count = 0;

  props.data?.map((item: CartType) => {
    const price = item.discountPrice * item.quantity;

    sum += price;
    count += item.quantity;
  });

  return [sum, count];
};
