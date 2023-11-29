import { useGetMyStoreItems } from '@/app/_hooks/query/item';
import ItemCards from './ItemCards';
import Spinner from '@/app/_components/spinner/Spinner';

const OpenStoreItems = () => {
  const {
    data: storeItems,
    ref,
    isFetchingNextPage,
  } = useGetMyStoreItems({ size: 5 });
  return (
    <>
      <ItemCards items={storeItems} />
      {isFetchingNextPage && (
        <div className="my-1 flex items-center justify-center">
          <Spinner />
        </div>
      )}

      {storeItems.length === 0 && (
        <span className="flex h-[36vh] items-center justify-center overflow-hidden text-xs text-dark-gray">
          등록한 상품이 없습니다.
        </span>
      )}

      <div ref={ref} className="h-4" />
    </>
  );
};

export default OpenStoreItems;
