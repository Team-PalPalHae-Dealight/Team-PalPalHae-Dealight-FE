import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Polygon from '@/app/_assets/svgs/polygon.svg';

type DropDownTextType = '거리순' | '마감 시간순';

type SortPropTypes = {
  getsortOption: (val: string) => void;
};

const OrderListDropDown = ({ getsortOption }: SortPropTypes) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState<DropDownTextType>('거리순');

  const onClickToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickOption = (option: DropDownTextType) => {
    setToggleMenu(option);
    getsortOption(option);
    setIsMenuOpen(!isMenuOpen);
  };

  const buttonClasses = twMerge(`flex items-center gap-2 rounded text-xs`);

  return (
    <div className="relative inline-block">
      <button onClick={onClickToggleMenu} className={buttonClasses}>
        {toggleMenu}

        <div
          className={`relative flex h-2.5 w-2.5 items-center transition ${
            isMenuOpen ? 'rotate-0' : '-rotate-180'
          }`}
        >
          <Polygon />
        </div>
      </button>
      {isMenuOpen && (
        <div className="border-gray-300 absolute mt-2 w-20 rounded border bg-white text-xs shadow-lg">
          <ul>
            <li
              onClick={() => onClickOption('거리순')}
              className="cursor-pointer px-2  py-1"
            >
              거리순
            </li>
            <li
              onClick={() => onClickOption('마감 시간순')}
              className="cursor-pointer px-2 py-1 "
            >
              마감 시간순
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderListDropDown;
