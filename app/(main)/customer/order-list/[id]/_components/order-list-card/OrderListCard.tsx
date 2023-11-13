'use client';

import { ResponseItemTypes } from '@/app/_components/infinite-scroll/fetchData';
import Image from 'next/image';
import Link from 'next/link';
import right from '@/app/_assets/images/right.png';

export type OrderListCardPropsType = {
  items?: ResponseItemTypes[] | null;
};

const OrderListCard = ({ items }: OrderListCardPropsType) => {
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
                <div className="text-xs text-dark-gray">
                  <div className="flex justify-between">
                    <div>2023.10.20.</div>
                    <div className="flex cursor-pointer items-center justify-center gap-2">
                      가게 보러가기
                      <Image src={right} width={7} height={7} alt="right" />
                    </div>
                  </div>
                  <div>17:32</div>
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
