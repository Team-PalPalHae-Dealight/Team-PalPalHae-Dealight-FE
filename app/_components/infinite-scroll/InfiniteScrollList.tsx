import Items from './Items';
import LoadMoreItems from './LoadMoreItems';
import { useEffect, useState } from 'react';
import { ResponseItemTypes } from './fetchData';

export type InfiniteListPropType = {
  fetchData: (page: number) => Promise<ResponseItemTypes[] | null>;
};

const InfiniteScrollList = ({ fetchData }: InfiniteListPropType) => {
  const [items, setItems] = useState<ResponseItemTypes[]>([]);

  useEffect(() => {
    fetchData(0).then(res => {
      if (res) setItems(res);
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
