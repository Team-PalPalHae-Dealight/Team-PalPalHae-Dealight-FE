'use client';

import { useState } from 'react';
import Image from 'next/image';
import notification from '@/app/_assets/images/notification.png';
import OrderListDropDown from '@/app/(main)/customer/order-list/[id]/_components/order-list-dropdown/OrderListDropDown';
import OrderListModal from '@/app/(main)/customer/order-list/[id]/_components/order-list-modal/OrderListModal';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import ItemList from '../item-list/ItemList';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import { useGetMemberOrders } from '@/app/_hooks/query/order';

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

  const {
    data: orders,
    ref,
    isFetchingNextPage,
  } = useGetMemberOrders({
    status: toggleMenu,
    size: 5,
  });

  return (
    <>
      <CustomerHeader />

      <div className="px-5">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-1" onClick={onClickOrderList}>
            <label className="text-xl	font-semibold">주문 내역</label>
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

        <ItemList
          orders={orders}
          refNode={ref}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>

      <CustomerFooter />
      {isOpen && <OrderListModal onClose={onClickOrderList} />}
    </>
  );
};

export default OrderList;
