'use client';

import Image from 'next/image';
import { ResponseItemTypes } from '../fetchData';
import Link from 'next/link';
import donut from '@/app/_assets/images/donut.png';

export type ItemTypes = {
  items?: ResponseItemTypes[] | null;
};

const ItemCards = ({ items }: ItemTypes) => {
  // 리스트 카드
  return (
    <>
      {items ? (
        items.map(item => {
          return (
            <Link key={item.id} href={'/asd'}>
              <div
                className="mb-2 flex justify-between gap-2 rounded bg-white p-4"
                style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
              >
                <div>
                  <Image width={60} height={60} src={donut} alt="donut" />
                </div>
                <div className="flex gap-5">
                  <div>
                    <div className="text-sm font-semibold">달콤한 도너츠</div>
                    <div className="flex gap-1 text-xs font-semibold">
                      <div>재고: </div>
                      <div className="text-red">3개</div>
                    </div>
                    <div className="text-xs text-dark-gray">
                      현재 위치로부터 100m
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end text-xs text-dark-gray line-through">
                      <div>3000 원</div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <div className="text-sm font-semibold text-red">
                        할인 50%
                      </div>
                      <div className="text-xs">1500 원</div>
                    </div>
                    <div className="flex justify-end text-xs text-dark-gray">
                      <div>마감 시간 : 22 : 00</div>
                    </div>
                  </div>
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

export default ItemCards;
