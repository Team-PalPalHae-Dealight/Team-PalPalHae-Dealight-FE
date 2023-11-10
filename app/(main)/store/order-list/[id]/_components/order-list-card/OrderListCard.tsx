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
              <div
                className=" mb-3 rounded-md bg-white p-2"
                style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
              >
                <div className="flex text-xs text-dark-gray">
                  <div>2023.10.20.</div>
                  <div>17:32</div>
                </div>
                <div className="flex items-center gap-1 text-black">
                  <div className="text-sm">달콤한 도너츠 외 3개</div>
                  <div className=" text-xs">11000 원</div>
                </div>
                <div className="flex items-center justify-between text-black">
                  <div className="text-xs">도착예정 시간: 17시 32분</div>
                  <div className="text-sm text-[#0338FF]">주문 완료</div>
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