'use client';

import { ResponseItemTypes } from '@/app/_components/infinite-scroll/fetchData';
import Link from 'next/link';

export type OrderListCardPropType = {
  items?: ResponseItemTypes[] | null;
};

const OrderListCard = ({ items }: OrderListCardPropType) => {
  const onClickCardLink = () => {
    sessionStorage.setItem('scrollY', JSON.stringify(window.scrollY));
  };
  return (
    <>
      {items ? (
        items.map(item => {
          return (
            <Link key={item.id} href={'/asd'} onClick={onClickCardLink}>
              <div className=" my-3 rounded-md bg-white p-2">
                <div className="flex text-xs text-dark-gray">
                  <div>2023.10.20.</div>
                  <div>17:32</div>
                </div>
                <div className="flex items-center gap-1 ">
                  <div className="text-sm">달콤한 도너츠 외 3개</div>
                  <div className=" text-xs">11000 원</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs">도착예정 시간: 17시 32분</div>
                  <div className="text-sm text-blue-700">주문 완료</div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default OrderListCard;
