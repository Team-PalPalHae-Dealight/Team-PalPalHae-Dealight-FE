import { useGetMyStoreItems } from '@/app/_hooks/query/item';
import ItemCards from './ItemCards';

const OpenStoreItems = () => {
  const { data: storeItems, ref } = useGetMyStoreItems({ size: 5 });
  return (
    <>
      <ItemCards items={storeItems} />

      <div ref={ref} className="h-4" />

      {storeItems.length === 0 && (
        <span className="flex items-center justify-center text-xs text-dark-gray">
          등록한 상품이 없습니다.
        </span>
      )}
    </>
  );
};

export default OpenStoreItems;
