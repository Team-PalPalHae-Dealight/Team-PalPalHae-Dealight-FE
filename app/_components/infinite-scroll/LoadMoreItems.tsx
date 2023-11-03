'use client';

import { Item, fetchData } from '@/app/_components/infinite-scroll/fetchData';
import { useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Items from './Items';
import Spinner from '../spinner/Spinner';

const LoadMore = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const { ref, inView } = useInView();

  const delay = async (ms: number) => {
    await new Promise(resolve => setTimeout(resolve, ms));
  };

  const loadMoreItems = useCallback(async () => {
    setIsLoading(true);
    await delay(777);

    const newProducts = (await fetchData(page)) ?? [];

    if (newProducts.length === 0) setIsEnded(true);

    setItems((prevProducts: Item[]) => [...prevProducts, ...newProducts]);
    setPage(page + 5);
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    if (inView && !isEnded && !isLoading) {
      loadMoreItems();
    }
  }, [inView, isEnded, loadMoreItems, isLoading]);

  return (
    <>
      <Items items={items} />
      <div
        className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        {isLoading && !isEnded ? (
          <Spinner />
        ) : (
          <div>더 이상 상품이 존재하지 않습니다.</div>
        )}
      </div>
    </>
  );
};

export default LoadMore;
