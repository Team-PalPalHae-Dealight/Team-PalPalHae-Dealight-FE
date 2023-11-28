import Image from 'next/image';
import { useState } from 'react';
import polygon from '@/app/_assets/images/polygon.png';
import reversePolygon from '@/app/_assets/images//reversePolygon.png';

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
        {sortBy === 'deadline' && '마감 입박순'}
        {sortBy === 'discount-rate' && '할인율순'}
        <div className="relative h-1.5 w-2.5">
          {isMenuOpen ? (
            <Image
              src={reversePolygon}
              fill
              sizes="(max-width: 768px) 100vw"
              alt="reversePolygon"
            />
          ) : (
            <Image
              src={polygon}
              fill
              sizes="(max-width: 768px) 100vw"
              alt="polygon"
            />
          )}
        </div>
      </button>
      {isMenuOpen && (
        <div className="border-gray-300 absolute mt-2 w-[67px] rounded border bg-white text-xs shadow-lg">
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
