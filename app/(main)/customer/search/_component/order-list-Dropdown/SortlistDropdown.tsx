import Image from 'next/image';
import { useState } from 'react';
import polygon from '@/app/_assets/images/polygon.png';
import reversePolygon from '@/app/_assets/images/reversePolygon.png';
import { twMerge } from 'tailwind-merge';

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
