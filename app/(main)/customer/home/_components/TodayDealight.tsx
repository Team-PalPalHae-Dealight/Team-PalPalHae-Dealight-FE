import { Dispatch, LegacyRef, SetStateAction } from 'react';
import TodayDealightDropDown, {
  DropDownTextType,
} from './TodayDealightDropDown';
import ItemCards from './ItemCards';
import { ItemType } from '@/app/_types/api/item';
import Spinner from '@/app/_components/spinner/Spinner';

type TodayDealightPropsType = {
  memberItems: ItemType[];
  refNode: LegacyRef<HTMLDivElement> | undefined;
  sortBy: 'distance' | 'discount-rate' | 'deadline';
  setSortBy: Dispatch<SetStateAction<DropDownTextType>>;
  isFetchingNextPage: boolean;
};

const TodayDealight = ({
  memberItems,
  refNode,
  sortBy,
  setSortBy,
  isFetchingNextPage,
}: TodayDealightPropsType) => {
  return (
    <>
      <div className="my-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">오늘의 딜라잇</h2>
        <TodayDealightDropDown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="h-[37vh] overflow-y-scroll">
        <ItemCards items={memberItems} />

        {isFetchingNextPage && (
          <div className="mb-1 flex items-center justify-center">
            <Spinner />
          </div>
        )}

        {memberItems.length === 0 && (
          <span className="flex h-full items-center justify-center text-xs text-dark-gray">
            등록한 상품이 없습니다.
          </span>
        )}

        <div ref={refNode} className="h-4" />
      </div>
    </>
  );
};

export default TodayDealight;
