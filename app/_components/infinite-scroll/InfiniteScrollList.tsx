import Items from './Items';
import LoadMoreItems from './LoadMoreItems';
import { useEffect, useState } from 'react';
import { ResponseItemType } from './fetchData';

export type InfiniteListPropType = {
  fetchData: (page: number) => Promise<ResponseItemType[] | null>;
};

const InfiniteScrollList = ({ fetchData }: InfiniteListPropType) => {
  const [items, setItems] = useState<ResponseItemType[]>([]);

  useEffect(() => {
    fetchData(0).then(res => {
      if (res !== null) setItems(res);
    });
  }, [fetchData]);

  return (
    <div className="container mx-auto min-h-screen max-w-5xl p-4">
      <Items items={items} />
      <LoadMoreItems fetchData={fetchData} />
    </div>
  );
};

export default InfiniteScrollList;
