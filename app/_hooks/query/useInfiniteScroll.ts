import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

interface UseInfiniteScrollProps<T> {
  fetchData: (pageParam: number) => Promise<{ items: T[]; hasNext: boolean }>;
  queryKey: string;
}

const useInfiniteScroll = <T>({
  fetchData,
  queryKey,
}: UseInfiniteScrollProps<T>) => {
  const {
    data = { pages: [{ items: [], hasNext: false }] },
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts', queryKey],
    queryFn: ({ pageParam }) => fetchData(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.items.length === 0 ? null : allPages.length + 1;
    },
  });

  const ref = useRef<HTMLDivElement | null>(null);

  if (data) {
    console.log(data);
  }

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

  return { data: totalData, ref };
};

export default useInfiniteScroll;
