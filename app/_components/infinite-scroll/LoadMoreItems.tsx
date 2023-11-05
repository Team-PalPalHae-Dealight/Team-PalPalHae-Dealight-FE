'use client';

import { ResponseItemTypes } from '@/app/_components/infinite-scroll/fetchData';
import { useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { InfiniteListPropType } from './InfiniteScrollList';
import Items from './Items';
import Spinner from '../spinner/Spinner';

const LoadMoreItems = ({ fetchData }: InfiniteListPropType) => {
  const [items, setItems] = useState<ResponseItemTypes[]>([]);
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

    setItems((prevProducts: ResponseItemTypes[]) => [
      ...prevProducts,
      ...newProducts,
    ]);
    setPage(prevPage => prevPage + 5);
    setIsLoading(false);
  }, [page, fetchData]);

  useEffect(() => {
    if (inView && !isEnded && !isLoading) {
      loadMoreItems();
    }

    const scrollY = Number(sessionStorage.getItem('scrollY'));

    if (scrollY) {
      window.scrollTo({ left: 0, top: scrollY, behavior: 'smooth' });
    }
  }, [inView, isEnded, loadMoreItems, isLoading]);

  return (
    <>
      <Items items={items} />
      <div
        className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        {isLoading && !isEnded ? <Spinner /> : <></>}
      </div>
    </>
  );
};

export default LoadMoreItems;
