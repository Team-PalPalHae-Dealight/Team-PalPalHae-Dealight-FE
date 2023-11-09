'use client';

import { useGetItem, usePatchItem } from '@/app/_hooks/query/item';

type ItemEditPropsType = {
  itemId: string;
};

const ItemEdit = ({ itemId }: ItemEditPropsType) => {
  const { data: item, isLoading } = useGetItem({ itemId });

  const { mutate: patchItem } = usePatchItem();

  const onClickEdit = () => {
    patchItem({ itemId });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-20">
      <div>
        <div className="h-20 w-20 rounded bg-white" />
        <button>이미지 불러오기</button>
      </div>

      <div>
        <input type="text" value={item?.name} onChange={() => {}} />
        <div>
          <label htmlFor="stock"> 재고:</label>{' '}
          <input
            type="text"
            id="stock"
            value={String(item?.stock ?? 0)}
            onChange={() => {}}
          />
          개
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <h2>상품 설명</h2>

        <p>
          판매 가격에 상품 원가를, 할인 가격에 할인된 가격을 작성하시면,
          <br />
          할인 가격으로 상품이 등록됩니다.
        </p>

        <div>
          <label htmlFor="originalPrice"> 판매 가격: </label>
          <input
            type="text"
            id="originalPrice"
            value={String(item?.originalPrice ?? 0)}
            onChange={() => {}}
          />
          원
        </div>

        <div>
          <label htmlFor="discountPrice"> 할인 가격: </label>
          <input
            type="text"
            id="discountPrice"
            value={String(item?.discountPrice ?? 0)}
            onChange={() => {}}
          />
          원
        </div>

        <div>
          <label htmlFor="information">상품 설명</label>
          <textarea
            id="information"
            value={item?.information}
            onChange={() => {}}
          ></textarea>
        </div>

        <button onClick={onClickEdit}>수정하기</button>
      </div>
    </div>
  );
};

export default ItemEdit;
