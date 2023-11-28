'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

interface UseItemsInfiniteScrollProps<T> {
  fetchData: (pageParam: number) => Promise<{ items: T[]; hasNext: boolean }>;
  queryKey: string;
}

const useItemsInfiniteScroll = <T>({
  fetchData,
  queryKey,
}: UseItemsInfiniteScrollProps<T>) => {
  const {
    data = { pages: [{ items: [], hasNext: false }] },
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['infinite', queryKey],
    queryFn: ({ pageParam }) => fetchData(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.items.length === 0 ? null : allPages.length + 1;
    },
  });

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const onIntersect = async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasNextPage) {
        await fetchNextPage();
      }
    };

    const observer = new IntersectionObserver(onIntersect, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, fetchNextPage]);

  const totalData = data.pages.reduce(
    (acc, cur) => [...acc, ...cur.items],
    [] as T[]
  );
  return { data: totalData, ref, isFetchingNextPage };
};

export default useItemsInfiniteScroll;
