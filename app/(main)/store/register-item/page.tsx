'use client';

import { useCreateItem } from '@/app/_hooks/query/item';

export default function Page() {
  const { mutate: createItem } = useCreateItem();

  const item = {
    name: '떡볶이',
    stock: 2,
    discountPrice: 3000,
    originalPrice: 4500,
    description: '기본 떡볶이 입니다.',
    information: '통신사 할인 불가능입니다.',
    image: null,
  };

  return (
    <main>
      <h1>상품 등록 페이지</h1>

      <div>
        <div className="h-20 w-20 rounded bg-white" />
        <button>이미지 불러오기</button>
      </div>

      <div>
        <input type="text" value={item?.name} onChange={() => {}} />
        <div>
          <label htmlFor="stock"> 재고:</label>
          <input type="text" id="stock" onChange={() => {}} />개
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
          <input type="text" id="originalPrice" onChange={() => {}} />원
        </div>

        <div>
          <label htmlFor="discountPrice"> 할인 가격: </label>
          <input type="text" id="discountPrice" onChange={() => {}} />원
        </div>

        <div>
          <label htmlFor="information">상품 설명</label>
          <textarea id="information" onChange={() => {}}></textarea>
        </div>
      </div>

      <button onClick={() => createItem({ item })}>등록하기</button>
    </main>
  );
}
