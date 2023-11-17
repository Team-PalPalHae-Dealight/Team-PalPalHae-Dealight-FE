'use client';

import { useState } from 'react';
import Image from 'next/image';
import notification from '@/app/_assets/images/notification.png';
import InfiniteScrollList from '@/app/_components/infinite-scroll/InfiniteScrollList';
import Footer from '@/app/_components/Footer/Footer';
import OrderListDropDown from '@/app/(main)/customer/order-list/[id]/_components/order-list-dropdown/OrderListDropDown';
import fetchOrderList from '@/app/(main)/customer/order-list/[id]/fetchOrderList';
import OrderListCard from '@/app/(main)/customer/order-list/[id]/_components/order-list-card/OrderListCard';
import OrderListModal from '@/app/(main)/customer/order-list/[id]/_components/order-list-modal/OrderListModal';

const OrderList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOrderList = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <main className="rounded-t-lg bg-gray px-5">
        <div className="sticky top-0 my-3 flex h-14 items-center justify-between bg-gray">
          <div className="flex items-center gap-1" onClick={onClickOrderList}>
            <label className="text-xl	font-semibold text-black">주문 내역</label>
            <Image src={notification} className="h-4 w-4" alt="notification" />
          </div>
          <div>
            <OrderListDropDown />
          </div>
        </div>
        <InfiniteScrollList
          fetchData={fetchOrderList}
          emptyWord={'주문 내역이 없습니다.'}
        >
          <OrderListCard />
        </InfiniteScrollList>
      </main>
      <Footer />
      {isOpen && <OrderListModal onClose={onClickOrderList} />}
    </>
  );
};

export default OrderList;
