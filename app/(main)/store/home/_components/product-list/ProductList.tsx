'use client';

import ItemCards from './ItemCards';
import { useGetMyStoreItems } from '@/app/_hooks/query/item';

type ProductListPropsType = {
  status: '영업 중' | '영업 준비 중';
};

const ProductList = ({ status }: ProductListPropsType) => {
  const { data: storeItems, ref } = useGetMyStoreItems({ size: 5 });

  return (
    <>
      <div className="mt-3  flex w-full flex-col gap-2.5">
        <h2 className="text-lg font-semibold">상품 목록</h2>

        <div className="h-96 overflow-auto">
          {status === '영업 중' && <ItemCards items={storeItems} />}

          <div ref={ref} />

          {(status === '영업 준비 중' || storeItems.length === 0) && (
            <span className="flex items-center justify-center text-xs text-dark-gray">
              등록한 상품이 없습니다.
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
