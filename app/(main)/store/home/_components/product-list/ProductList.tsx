'use client';

import { useCallback, useEffect, useState } from 'react';
import getItemList, { ResponseItemTypes } from '../../_services/getItemList';
import { useInView } from 'react-intersection-observer';
import ItemCards from './ItemCards';
import Spinner from '@/app/_components/spinner/Spinner';

type ProductListPropsType = {
  status: '영업 중' | '영업 준비 중' | '';
};

const ProductList = ({ status }: ProductListPropsType) => {
  const [items, setItems] = useState<ResponseItemTypes[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const { ref, inView } = useInView();

  const delay = async (ms: number) => {
    await new Promise(resolve => setTimeout(resolve, ms));
  };

  const loadMoreItems = useCallback(async () => {
    setIsLoading(true);
    await delay(777);

    const newItems = (await getItemList(page)) ?? [];

    if (newItems.length === 0) setIsEnded(true);

    setItems((prevItems: ResponseItemTypes[]) => [...prevItems, ...newItems]);
    setPage(prevPage => prevPage + 5);
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    if (inView && !isEnded && !isLoading) {
      loadMoreItems();
    }
  }, [inView, isEnded, loadMoreItems, isLoading]);
  return (
    <>
      <div className="my-3 flex w-full items-center justify-start">
        <h2 className="text-lg font-bold">상품 목록</h2>
      </div>
      <div className="h-[47vh] w-full overflow-y-scroll">
        <ItemCards items={items} />
        <div
          className="col-span-1 flex items-center justify-center sm:col-span-2 md:col-span-3"
          ref={ref}
        >
          {isLoading && !isEnded ? (
            <>
              <Spinner />
            </>
          ) : items.length ? (
            <div className="items-center justify-center p-8 text-xs text-dark-gray">
              <p>등록한 상품이 없습니다.</p>
            </div>
          ) : (
            <div className="flex h-[47vh] items-center justify-center text-xs text-dark-gray">
              <p>등록한 상품이 없습니다.</p>
            </div>
          )}
          {status === '영업 준비 중' && items.length !== 0 && (
            <div className="flex h-[47vh] items-center justify-center text-xs text-dark-gray">
              <p>등록한 상품이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
