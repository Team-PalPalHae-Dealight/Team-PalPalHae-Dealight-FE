'use client';

import { useState } from 'react';
import Image from 'next/image';
import notification from '@/app/_assets/images/notification.png';
import Footer from '@/app/_components/Footer/Footer';
import OrderListDropDown from '@/app/(main)/customer/order-list/[id]/_components/order-list-dropdown/OrderListDropDown';
import OrderListModal from '@/app/(main)/customer/order-list/[id]/_components/order-list-modal/OrderListModal';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import ItemList from '../item-list/ItemList';

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
      <CustomerHeader />
      <main className="rounded-t-lg bg-gray px-5">
        <div className="flex h-14 items-center justify-between bg-gray">
          <div className="flex items-center gap-1" onClick={onClickOrderList}>
            <label className="text-xl	font-semibold text-black">주문 내역</label>
            <Image src={notification} className="h-4 w-4" alt="notification" />
          </div>
          <div>
            <OrderListDropDown
              toggleMenu={toggleMenu}
              setToggleMenu={setToggleMenu}
            />
          </div>
        </div>
        <ItemList status={toggleMenu} />
      </main>
      <Footer />
      {isOpen && <OrderListModal onClose={onClickOrderList} />}
    </>
  );
};

export default OrderList;
