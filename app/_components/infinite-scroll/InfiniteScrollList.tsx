import { fetchData } from '@/app/_components/infinite-scroll/fetchData';
import Items from './Items';
import LoadMore from './LoadMoreItems';

const InfiniteList = async () => {
  const items = await fetchData(0);

  return (
    <div className="container mx-auto min-h-screen max-w-5xl p-4">
      <Items items={items} />
      <LoadMore />
    </div>
  );
};

export default InfiniteList;
