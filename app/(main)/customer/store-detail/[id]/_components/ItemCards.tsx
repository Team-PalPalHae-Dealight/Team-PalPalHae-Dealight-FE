import Image from 'next/image';
import Link from 'next/link';
import { ItemType } from '@/app/_types/api/item';
import pageRoute from '@/app/_constants/path';

export type ItemTypes = {
  items?: ItemType[];
};

const ItemCards = ({ items }: ItemTypes) => {
  return (
    <>
      {items ? (
        items.map(item => {
          return (
            /**
             * @todo
             * 라우팅 처리 수정 필요
             */
            <Link
              key={item.itemId}
              href={pageRoute.customer.itemDetail(String(item.itemId))}
            >
              <div
                className="mb-2 flex h-20 items-center gap-2 rounded bg-white p-4"
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
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-semibold">{item.itemName}</div>
                    <div className="flex gap-1 text-xs font-semibold">
                      <div>재고: </div>
                      <div className="text-red">{item.stock}개</div>
                    </div>
                  </div>

                  <div className="ml-auto flex flex-col gap-1">
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
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemCards;
