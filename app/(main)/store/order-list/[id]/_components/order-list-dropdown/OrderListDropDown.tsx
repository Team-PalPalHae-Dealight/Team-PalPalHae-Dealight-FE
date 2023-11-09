import Image from 'next/image';
import { useState } from 'react';
import polygon from '../../../../../../_assets/images/polygon.png';
import reversePolygon from '../../../../../../_assets/images/reversePolygon.png';

const OrderListDropDown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState('전체');

  const onClickToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickOption = (option: string) => {
    setToggleMenu(option);
    setIsMenuOpen(!isMenuOpen);
  };

  let buttonClasses = 'flex items-center gap-2 rounded text-xs';

  if (toggleMenu === '전체') {
    buttonClasses += ' text-black';
  } else if (toggleMenu === '주문 접수') {
    buttonClasses += ' text-[#00CC22]';
  } else if (toggleMenu === '주문 확인') {
    buttonClasses += ' text-[#FF5C01]';
  } else if (toggleMenu === '주문 완료') {
    buttonClasses += ' text-[#0338FF]';
  } else if (toggleMenu === '주문 취소') {
    buttonClasses += ' text-[#FF0201]';
  }

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
            <li onClick={() => onClickOption('전체')} className="px-2 py-1">
              전체
            </li>
            <li
              onClick={() => onClickOption('주문 접수')}
              className="px-2 py-1 text-[#00CC22]"
            >
              주문 접수
            </li>
            <li
              onClick={() => onClickOption('주문 확인')}
              className="px-2 py-1 text-[#FF5C01]"
            >
              주문 확인
            </li>
            <li
              onClick={() => onClickOption('주문 완료')}
              className="px-2 py-1 text-[#0338FF]"
            >
              주문 완료
            </li>
            <li
              onClick={() => onClickOption('주문 취소')}
              className="px-2 py-1 text-[#FF0201]"
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
