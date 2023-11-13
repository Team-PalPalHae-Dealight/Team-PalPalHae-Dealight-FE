'use client';

import { useGetItem } from '@/app/_hooks/query/item';

type ItemPropsType = {
  itemId: string;
};

const Item = ({ itemId }: ItemPropsType) => {
  const { data: item, isLoading } = useGetItem({ itemId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-20">
      <div className="h-20 w-20 rounded bg-white" />

      <div>
        <div>{item?.name}</div>
        <div>재고: {item?.stock}</div>
      </div>

      <div>
        <h2>상품 설명</h2>
        <div>할인 가격: {item?.discountPrice}원</div>
        <div>원가: {item?.originalPrice}원</div>
        <p>{item?.information}</p>
      </div>

      <div>
        <h2>안내 사항</h2>
      </div>
    </div>
  );
};

export default Item;
