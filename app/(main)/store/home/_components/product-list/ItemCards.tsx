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
        return (
          <Link
            key={item.itemId}
            href={pageRoute.store.itemDetail(String(item.itemId))}
            scroll={false}
          >
            <div
              className="mb-2 flex items-center gap-2 rounded bg-white p-4"
              style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded">
                <Image
                  priority
                  fill
                  alt={item.itemName}
                  src={String(item.image)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="ml-1 flex w-full items-center">
                <div className="flex flex-col gap-1">
                  <div className="w-20 truncate text-sm font-semibold">
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

                  <div className="flex items-center justify-end gap-2">
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
