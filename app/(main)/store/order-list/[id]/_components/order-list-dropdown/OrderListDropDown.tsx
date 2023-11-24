import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import polygon from '@/app/_assets/images/polygon.png';
import reversePolygon from '@/app/_assets/images//reversePolygon.png';
import { DropDownTextType } from '../order-list/OrderList';

type OrderListPropsType = {
  toggleMenu: string;
  setToggleMenu: Dispatch<SetStateAction<DropDownTextType>>;
};

const OrderListDropDown = ({
  toggleMenu,
  setToggleMenu,
}: OrderListPropsType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickOption = (option: DropDownTextType) => {
    setToggleMenu(option);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={onClickToggleMenu}
        className={`flex items-center gap-2 rounded text-xs ${
          toggleMenu === 'ALL'
            ? 'text-black'
            : toggleMenu === 'RECEIVED'
            ? 'text-green'
            : toggleMenu === 'CONFIRMED'
            ? 'text-orange'
            : toggleMenu === 'COMPLETED'
            ? 'text-blue'
            : toggleMenu === 'CANCELED'
            ? 'text-red'
            : null
        }`}
      >
        {toggleMenu === 'ALL' && '전체'}
        {toggleMenu === 'RECEIVED' && '주문 접수'}
        {toggleMenu === 'CONFIRMED' && '주문 확인'}
        {toggleMenu === 'COMPLETED' && '주문 완료'}
        {toggleMenu === 'CANCELED' && '주문 취소'}
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
        <div className="border-gray-300 absolute right-0 mt-2 w-14 rounded border bg-white text-xs shadow-lg">
          <ul>
            <li
              onClick={() => onClickOption('ALL')}
              className="cursor-pointer p-1"
            >
              전체
            </li>
            <li
              onClick={() => onClickOption('RECEIVED')}
              className="cursor-pointer p-1 text-green"
            >
              주문 접수
            </li>
            <li
              onClick={() => onClickOption('CONFIRMED')}
              className="cursor-pointer p-1 text-orange"
            >
              주문 확인
            </li>
            <li
              onClick={() => onClickOption('COMPLETED')}
              className="cursor-pointer p-1 text-blue"
            >
              주문 완료
            </li>
            <li
              onClick={() => onClickOption('CANCELED')}
              className="cursor-pointer p-1 text-red"
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
