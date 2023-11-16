import Image from 'next/image';
import Link from 'next/link';
import donut from '@/app/_assets/images/donut.png';
import { ResponseItemTypes } from '../../fetchData';

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
            /**
             * @todo
             * 라우팅 처리 수정 필요
             */
            <Link key={item.id} href={'/'}>
              <div
                className="mb-2 flex h-20 items-center justify-between rounded bg-white p-4"
                style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
              >
                <div>
                  <Image width={60} height={60} src={donut} alt="donut" />
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-semibold">달콤한 도너츠</div>
                    <div className="flex gap-1 text-xs font-semibold">
                      <div>재고: </div>
                      <div className="text-red">3개</div>
                    </div>
                  </div>
                  <div className="ml-12 flex flex-col gap-1">
                    <div className="flex justify-end text-xs text-dark-gray line-through">
                      <div>3000 원</div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <div className="text-sm font-semibold text-red">
                        할인 50%
                      </div>
                      <div className="text-xs">1500 원</div>
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
