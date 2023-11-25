'use client';

import Image from 'next/image';
import { ResponseItemTypes } from '../_services/fetchData';
import Link from 'next/link';
import pageRoute from '@/app/_constants/path';

export type ItemTypes = {
  items?: ResponseItemTypes[] | [];
};

const ItemCards = ({ items }: ItemTypes) => {
  // 리스트 카드
  return (
    <>
      {items ? (
        items.map(item => {
          return (
            <Link
              key={item.itemId}
              href={pageRoute.customer.itemDetail(String(item.itemId))}
            >
              <div
                className="mb-2 flex w-full justify-between gap-2 rounded bg-white p-4"
                style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
              >
                <div>
                  <Image width={60} height={60} src={item.image} alt="image" />
                </div>
                <div className="flex gap-5">
                  <div>
                    <div className="w-28 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                      {item.itemName}
                    </div>
                    <div className="flex gap-1 text-xs font-semibold">
                      <div>재고: </div>
                      <div className="text-red">{item.stock}개</div>
                    </div>
                    <div className="w-28 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-dark-gray">
                      {item.storeAddress.name}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end text-xs text-dark-gray line-through">
                      <div>{item.originalPrice} 원</div>
                    </div>
                    <div className="flex w-28 items-center justify-end gap-2">
                      <div className="text-sm font-semibold text-red">
                        할인
                        {(
                          ((item.originalPrice - item.discountPrice) /
                            item.originalPrice) *
                          100
                        ).toFixed(0)}
                        %
                      </div>
                      <div className="text-xs">{item.discountPrice} 원</div>
                    </div>
                    <div className="flex justify-end text-xs text-dark-gray">
                      <div>마감 시간 : {item.storeCloseTime}</div>
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
