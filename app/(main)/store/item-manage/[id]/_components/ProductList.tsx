'use client';

import ItemCards from './ItemCards';
import Spinner from '@/app/_components/spinner/Spinner';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import pageRoute from '@/app/_constants/path';
import { useRouter } from 'next/navigation';
import { useGetMyStoreItems } from '@/app/_hooks/query/item';

const ProductList = () => {
  const router = useRouter();

  const {
    data: items,
    ref,
    isFetchingNextPage,
  } = useGetMyStoreItems({
    size: 5,
  });

  return (
    <div className="h-[79vh]">
      <div className="my-3 flex w-full items-center justify-start">
        <h2 className="text-lg font-bold">상품 목록</h2>
      </div>
      <div className="h-[63vh] w-full overflow-y-scroll">
        <ItemCards items={items} />

        <div className="h-4" ref={ref} />

        {isFetchingNextPage && (
          <div className="mb-3 flex items-center justify-center">
            <Spinner />
          </div>
        )}

        {items.length === 0 && (
          <div className="flex h-[63vh] items-center justify-center text-xs text-dark-gray">
            <p>등록한 상품이 없습니다.</p>
          </div>
        )}
      </div>
      <PrimaryButton
        onClick={() => router.push(pageRoute.store.itemRegister())}
      >
        등록하기
      </PrimaryButton>
    </div>
  );
};

export default ProductList;
