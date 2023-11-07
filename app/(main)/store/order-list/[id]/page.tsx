'use client';

import Footer from '@/app/_components/Footer/Footer';
import InfiniteScrollList from '@/app/_components/infinite-scroll/InfiniteScrollList';
import OrderListCard from '@/app/(main)/store/order-list/[id]/OrderListCard';
import fetchData from './fetchData';
import React from 'react';

const page = () => {
  return (
    <>
      <main className="mx-5 mt-9 rounded-t-lg bg-gray pb-3 pl-5 pr-5 pt-5">
        <div className="my-3 flex items-center justify-between">
          <label className="text-xl	font-semibold">주문 내역</label>
          {/* 드랍 다운 ui로 변경 예정 */}
          <select
            onChange={e => console.log(e.target.value)}
            className="text-xs"
          >
            <option value="전체">전체</option>
            <option value="주문완료">주문완료</option>
            <option value="주문확인">주문확인</option>
            <option value="주문접수">주문접수</option>
            <option value="주문취소">주문취소</option>
          </select>
        </div>
        <InfiniteScrollList fetchData={fetchData}>
          <OrderListCard />
        </InfiniteScrollList>
      </main>
      <Footer />
    </>
  );
};

export default page;
