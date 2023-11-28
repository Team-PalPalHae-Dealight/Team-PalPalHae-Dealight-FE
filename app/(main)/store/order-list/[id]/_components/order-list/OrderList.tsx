'use client';

import notification from '../../../../../../_assets/images/notification.png';
import { useState } from 'react';
import OrderListDropDown from '../order-list-dropdown/OrderListDropDown';
import OrderListModal from '../order-list-modal/OrderListModal';
import Image from 'next/image';
import StoreFooter from '@/app/_components/Footer/StoreFooter';
import ItemList from '../item-list/ItemList';
import Header from '@/app/_components/Header/Header';

export type DropDownTextType =
  | 'ALL'
  | 'RECEIVED'
  | 'CONFIRMED'
  | 'COMPLETED'
  | 'CANCELED';

const OrderList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState<DropDownTextType>('ALL');

  const onClickOrderList = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <Header />

      <div className="my-3 flex items-center justify-between bg-gray px-5">
        <div className="flex items-center gap-1" onClick={onClickOrderList}>
          <label className="text-xl	font-semibold text-black">주문 내역</label>
          <div className="relative h-4 w-4">
            <Image
              src={notification}
              fill
              sizes="(max-width: 768px) 100vw"
              alt="notification"
            />
          </div>
        </div>

        <div>
          <OrderListDropDown
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
          />
        </div>
      </div>

      <ItemList status={toggleMenu} />
      <StoreFooter />
      {isOpen && <OrderListModal onClose={onClickOrderList} />}
    </>
  );
};

export default OrderList;
