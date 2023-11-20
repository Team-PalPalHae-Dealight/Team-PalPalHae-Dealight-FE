'use client';

import { useCallback, useEffect, useState } from 'react';
import fetchData, { ResponseItemTypes } from '../../fetchData';
import { useInView } from 'react-intersection-observer';
import ItemCards from './ItemCards';
import Spinner from '@/app/_components/spinner/Spinner';

const ProductList = () => {
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

    /**
     * @todo api 작업 시 fetch함수에 넘겨줄 파라미터 수정해야 함 ex)sortBy,x좌표,y좌표 등
     */
    const newItems = (await fetchData(page)) ?? [];

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
    <div className="mb-2 h-[35vh]">
      <div className="mt-5 h-full w-full overflow-y-scroll">
        <ItemCards items={items} />
        <div
          className="col-span-1 flex items-center justify-center sm:col-span-2 md:col-span-3"
          ref={ref}
        >
          {isLoading && !isEnded ? (
            <>
              <Spinner />
              <div className="h-16" />
            </>
          ) : items.length ? (
            <div className="items-center justify-center p-8 text-xs text-dark-gray">
              <p>등록한 상품이 없습니다.</p>
            </div>
          ) : (
            <div className="flex h-96 items-center justify-center text-xs text-dark-gray">
              <p>등록한 상품이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;