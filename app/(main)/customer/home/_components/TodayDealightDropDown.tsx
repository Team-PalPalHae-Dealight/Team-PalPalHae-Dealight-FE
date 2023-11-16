import Image from 'next/image';
import { useState } from 'react';
import polygon from '@/app/_assets/images/polygon.png';
import reversePolygon from '@/app/_assets/images//reversePolygon.png';

export type DropDownTextType = '거리순' | '마감 임박순' | '할인율순';

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
        {sortBy}
        {isMenuOpen ? (
          <Image
            src={reversePolygon}
            width={10}
            height={10}
            alt="reversePolygon"
          />
        ) : (
          <Image src={polygon} width={10} height={10} alt="polygon" />
        )}
      </button>
      {isMenuOpen && (
        <div className="border-gray-300 absolute mt-2 w-[67px] rounded border bg-white text-xs shadow-lg">
          <ul>
            <li
              onClick={() => onClickOption('거리순')}
              className="cursor-pointer px-1 py-1"
            >
              거리순
            </li>
            <li
              onClick={() => onClickOption('마감 임박순')}
              className="cursor-pointer px-1 py-1 "
            >
              마감 임박순
            </li>
            <li
              onClick={() => onClickOption('할인율순')}
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
