import Image from 'next/image';
import { useState } from 'react';
import polygon from '@/app/_assets/images/polygon.png';
import reversePolygon from '@/app/_assets/images//reversePolygon.png';
import { twMerge } from 'tailwind-merge';

type DropDownTextType =
  | '전체'
  | '주문 접수'
  | '주문 확인'
  | '주문 완료'
  | '주문 취소';

const OrderListDropDown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState<DropDownTextType>('전체');

  const onClickToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickOption = (option: DropDownTextType) => {
    setToggleMenu(option);
    setIsMenuOpen(!isMenuOpen);
  };

  const textColorConfigStyles = {
    전체: 'text-black',
    '주문 접수': 'text-green',
    '주문 확인': 'text-orange',
    '주문 완료': 'text-blue',
    '주문 취소': 'text-red',
  };

  const buttonClasses = twMerge(
    `flex items-center gap-2 rounded text-xs ${textColorConfigStyles[toggleMenu]}`
  );

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
        <div className="border-gray-300 absolute mt-2 w-16 rounded border bg-white text-xs shadow-lg">
          <ul>
            <li
              onClick={() => onClickOption('전체')}
              className="cursor-pointer px-2 py-1"
            >
              전체
            </li>
            <li
              onClick={() => onClickOption('주문 접수')}
              className="cursor-pointer px-2 py-1 text-green"
            >
              주문 접수
            </li>
            <li
              onClick={() => onClickOption('주문 확인')}
              className="cursor-pointer px-2 py-1 text-orange"
            >
              주문 확인
            </li>
            <li
              onClick={() => onClickOption('주문 완료')}
              className="cursor-pointer px-2 py-1 text-blue"
            >
              주문 완료
            </li>
            <li
              onClick={() => onClickOption('주문 취소')}
              className="cursor-pointer px-2 py-1 text-red"
            >
              주문 취소
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderListDropDown;
