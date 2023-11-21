'use client';

import Link from 'next/link';
import { ResponseItemType } from '../../fetchOrderList';

export type OrderListCardPropsType = {
  items?: ResponseItemType[] | null;
};

const OrderListCard = ({ items }: OrderListCardPropsType) => {
  return (
    <>
      {items ? (
        items.map(item => {
          return (
            <Link key={item.orderId} href={'/asd'}>
              <div
                className=" mb-3 rounded-md bg-white p-2"
                style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
              >
                <div className="flex text-xs text-dark-gray">
                  <div className="flex justify-between">
                    <div>2023.10.20.</div>
                  </div>
                  <div className="ml-1">17:32</div>
                </div>
                <div className="flex items-center gap-1 text-black">
                  <div className="text-sm">달콤한 도너츠 외 3개</div>
                  <div className=" text-xs">11000 원</div>
                </div>
                <div className="flex items-center text-black">
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
