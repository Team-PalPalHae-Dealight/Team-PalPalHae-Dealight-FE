import { useState } from 'react';
import Polygon from '@/app/_assets/svgs/polygon.svg';

export type DropDownTextType = 'distance' | 'deadline' | 'discount-rate';

type TodayDealightDropDownPropsType = {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<DropDownTextType>>;
};

const TodayDealightDropDown = ({
  sortBy,
  setSortBy,
}: TodayDealightDropDownPropsType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickOption = (option: DropDownTextType) => {
    setSortBy(option);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={onClickToggleMenu}
        className="flex items-center gap-2 rounded text-xs "
      >
        {sortBy === 'distance' && '거리순'}
        {sortBy === 'deadline' && '마감 임박순'}
        {sortBy === 'discount-rate' && '할인율순'}
        <div
          className={`relative flex h-2.5 w-2.5 items-center transition ${
            isMenuOpen ? 'rotate-0' : '-rotate-180'
          }`}
        >
          <Polygon />
        </div>
      </button>
      {isMenuOpen && (
        <div className="border-gray-300 absolute right-0 mt-2 w-24 rounded border bg-white text-xs shadow-lg">
          <ul>
            <li
              onClick={() => onClickOption('distance')}
              className="cursor-pointer px-1 py-1"
            >
              거리순
            </li>
            <li
              onClick={() => onClickOption('deadline')}
              className="cursor-pointer px-1 py-1 "
            >
              마감 임박순
            </li>
            <li
              onClick={() => onClickOption('discount-rate')}
              className="cursor-pointer px-1 py-1"
            >
              할인율순
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodayDealightDropDown;
