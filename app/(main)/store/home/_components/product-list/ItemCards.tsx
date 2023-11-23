import Image from 'next/image';
import Link from 'next/link';
import { ResponseItemTypes } from '../../_services/getItemList';
import pageRoute from '@/app/_constants/path';

export type ItemTypes = {
  items: ResponseItemTypes[];
};

const ItemCards = ({ items }: ItemTypes) => {
  return (
    <>
      {items.map(item => {
        return (
          <Link
            key={item.itemId}
            href={pageRoute.store.itemDetail(String(item.itemId))}
          >
            <div
              className="mb-2 flex h-20 items-center justify-between rounded bg-white p-4"
              style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
            >
              <div>
                <Image width={60} height={60} src={item.image} alt="donut" />
              </div>
              <div className="flex items-center">
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-semibold">{item.itemName}</div>
                  <div className="flex gap-1 text-xs font-semibold">
                    <div>재고: </div>
                    <div className="text-red">{item.stock}개</div>
                  </div>
                </div>
                <div className="ml-12 flex flex-col gap-1">
                  <div className="flex justify-end text-xs text-dark-gray line-through">
                    <div>{item.originalPrice} 원</div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
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
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ItemCards;
