'use client';

import OpenStoreItems from './OpenStoreItems';

type ProductListPropsType = {
  status: '영업 중' | '영업 준비 중';
};

const ProductList = ({ status }: ProductListPropsType) => {
  return (
    <>
      <div className="mt-3 flex h-full w-full flex-col gap-2.5">
        <h2 className="text-lg font-semibold">상품 목록</h2>

        <div id="test" className="h-[40vh] overflow-y-auto">
          {status === '영업 중' && <OpenStoreItems />}

          {status === '영업 준비 중' && (
            <span className="flex h-[36vh] items-center justify-center overflow-hidden text-xs text-dark-gray">
              등록한 상품이 없습니다.
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
