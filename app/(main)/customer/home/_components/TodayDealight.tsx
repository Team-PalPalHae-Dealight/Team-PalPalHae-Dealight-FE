import { useState } from 'react';
import TodayDealightDropDown, {
  DropDownTextType,
} from './TodayDealightDropDown';
import ItemCards from './ItemCards';
import { useGetMemberItems } from '@/app/_hooks/query/item';

type TodayDealightPropsType = {
  lat: number;
  lng: number;
};

const TodayDealight = ({ lng, lat }: TodayDealightPropsType) => {
  const [sortBy, setSortBy] = useState<DropDownTextType>('distance');

  const { data: memberItems, ref } = useGetMemberItems({
    size: 5,
    sortBy: 'distance',
    xCoordinate: lng,
    yCoordinate: lat,
  });

  return (
    <>
      <div className="my-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">오늘의 딜라잇</h2>
        <TodayDealightDropDown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <ItemCards items={memberItems} />

      <div ref={ref} className="h-4" />

      {memberItems.length === 0 && (
        <span className="flex items-center justify-center text-xs text-dark-gray">
          등록한 상품이 없습니다.
        </span>
      )}
    </>
  );
};

export default TodayDealight;
