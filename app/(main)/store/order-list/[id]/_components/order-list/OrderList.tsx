'use client';

import notification from '../../../../../../_assets/images/notification.png';
import { useState } from 'react';
import OrderListDropDown from '../order-list-dropdown/OrderListDropDown';
import fetchOrderList from '../../fetchOrderList';
import OrderListModal from '../order-list-modal/OrderListModal';
import Image from 'next/image';
import InfiniteScrollList from '@/app/_components/infinite-scroll/InfiniteScrollList';
import OrderListCard from '../order-list-card/OrderListCard';
import Footer from '@/app/_components/Footer/Footer';
import Header from '@/app/_components/Header/Header';

const OrderList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOrderList = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <Header />

      <div className="sticky top-16 my-3 flex h-14 items-center justify-between bg-gray px-5">
        <div className="flex items-center gap-1" onClick={onClickOrderList}>
          <label className="text-xl	font-semibold text-black">주문 내역</label>
          <Image src={notification} className="h-4 w-4" alt="notification" />
        </div>
        <div>
          <OrderListDropDown />
        </div>
      </div>

      <div className="rounded-t-lg">
        <InfiniteScrollList
          fetchData={fetchOrderList}
          emptyWord={'주문 내역이 없습니다.'}
        >
          <OrderListCard />
        </InfiniteScrollList>
      </div>

      <Footer />
      {isOpen && <OrderListModal onClose={onClickOrderList} />}
    </>
  );
};

export default OrderList;
