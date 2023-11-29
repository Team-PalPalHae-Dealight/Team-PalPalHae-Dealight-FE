'use client';

import Image from 'next/image';
import Link from 'next/link';
import pageRoute from '@/app/_constants/path';
import { ItemType } from '@/app/_types/api/item';

export type ItemCardsPropsType = {
  items: ItemType[];
};

const ItemCards = ({ items }: ItemCardsPropsType) => {
  return (
    <>
      {items.map(item => {
        return item.stock ? (
          <Link
            key={item.itemId}
            href={pageRoute.customer.itemDetail(String(item.itemId))}
            scroll={false}
          >
            <div
              className="mb-2 flex items-center gap-2 rounded bg-white px-4 py-2"
              style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
            >
              <div className="relative h-14 w-14 overflow-hidden rounded">
                <Image
                  priority
                  fill
                  alt={item.itemName}
                  src={String(item.image)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex w-full items-center">
                <div className="ml-1 flex flex-col gap-1">
                  <div className="w-28 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                    {item.itemName}
                  </div>

                  <div className="flex gap-1 text-xs font-semibold">
                    <div>재고: </div>
                    <div className="text-red">{item.stock}개</div>
                  </div>
                </div>

                <div className="ml-auto flex flex-col gap-1">
                  <div className="flex justify-end text-xs text-dark-gray line-through">
                    <div>{item.originalPrice} 원</div>
                  </div>
                  <div className="flex w-28 items-center justify-end gap-2">
                    <div className="text-sm font-semibold text-red">
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
                    <div>마감 {item.storeCloseTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : null;
      })}
    </>
  );
};

export default ItemCards;
