import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import TodayDealightDropDown, {
  DropDownTextType,
} from './TodayDealightDropDown';
import fetchData, { ResponseItemTypes } from '../_services/fetchData';
import ItemCards from './ItemCards';
import { useInView } from 'react-intersection-observer';
import Spinner from '@/app/_components/spinner/Spinner';

type TodayDealightPropsType = {
  listName: '오늘의 딜라잇' | '상품 목록';
  emptyWord: string;
  lat: number;
  lng: number;
  setStoreLocation: Dispatch<SetStateAction<ResponseItemTypes[] | undefined>>;
};

const TodayDealight = ({
  listName,
  emptyWord,
  lat,
  lng,
  setStoreLocation,
}: TodayDealightPropsType) => {
  const [items, setItems] = useState<ResponseItemTypes[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [sortBy, setSortBy] = useState<DropDownTextType>('distance');

  const { ref, inView } = useInView();

  const delay = async (ms: number) => {
    await new Promise(resolve => setTimeout(resolve, ms));
  };
  const loadMoreItems = useCallback(async () => {
    setIsLoading(true);
    await delay(777);

    if (lat && lng) {
      const newItems =
        (await fetchData({
          xCoordinate: lat,
          yCoordinate: lng,
          sortBy,
          page,
        })) ?? [];
      if (newItems.length === 0) setIsEnded(true);
      setStoreLocation(newItems);

      setItems((prevItems: ResponseItemTypes[]) => [...prevItems, ...newItems]);
      setPage(prevPage => prevPage + 1);
      setIsLoading(false);
    }
  }, [lat, lng, page, sortBy, setStoreLocation]);

  useEffect(() => {
    if (inView && !isEnded && !isLoading) {
      loadMoreItems();
    }
  }, [inView, isEnded, loadMoreItems, isLoading, sortBy]);

  useEffect(() => {
    if (sortBy) {
      setPage(1);
      setIsEnded(false);
      setItems([]);
    }
  }, [sortBy]);

  return (
    <>
      <div className="my-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">{listName}</h2>
        <TodayDealightDropDown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="h-[50vh] overflow-y-scroll">
        <ItemCards items={items} />
        <div
          className="col-span-1 flex items-center justify-center sm:col-span-2 md:col-span-3"
          ref={ref}
        >
          {isLoading && !isEnded ? (
            <Spinner />
          ) : !items.length ? (
            <div className="flex h-[50vh] items-center justify-center text-xs text-dark-gray">
              <p>{emptyWord}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TodayDealight;
