import { useCallback, useEffect, useState } from 'react';
import TodayDealightDropDown, {
  DropDownTextType,
} from './TodayDealightDropDown';
import fetchData, { ResponseItemTypes } from '../fetchData';
import ItemCards from './ItemCards';
import { useInView } from 'react-intersection-observer';
import Spinner from '@/app/_components/spinner/Spinner';

type TodayDealightPropsType = {
  listName: '오늘의 딜라잇' | '상품 목록';
  emptyWord: string;
};

const TodayDealight = ({ listName, emptyWord }: TodayDealightPropsType) => {
  const [items, setItems] = useState<ResponseItemTypes[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [sortBy, setSortBy] = useState<DropDownTextType>('거리순');

  const { ref, inView } = useInView();

  const delay = async (ms: number) => {
    await new Promise(resolve => setTimeout(resolve, ms));
  };

  const loadMoreItems = useCallback(async () => {
    setIsLoading(true);
    await delay(777);

    /**@todo api 작업 시 fetch함수에 넘겨줄 파라미터 수정해야 함 ex)sortBy,x좌표,y좌표 등 */
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
    <>
      <div className="my-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">{listName}</h2>
        <TodayDealightDropDown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="h-96 overflow-y-scroll">
        <ItemCards items={items} />
        <div
          className="col-span-1 flex items-center justify-center sm:col-span-2 md:col-span-3"
          ref={ref}
        >
          {isLoading && !isEnded ? (
            <Spinner />
          ) : items.length ? (
            <div className="flex items-center justify-center text-xs text-dark-gray">
              <p>{emptyWord}</p>
            </div>
          ) : (
            <div className="flex h-96 items-center justify-center text-xs text-dark-gray">
              <p>{emptyWord}</p>
            </div>
          )}
        </div>
        {/* footer 수정 작업 후 수정 필요 */}
        <div className="h-16" />
      </div>
    </>
  );
};

export default TodayDealight;
