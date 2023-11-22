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
                className="mb-2 flex h-20 rounded bg-white p-4"
                style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
              >
                <Image width={60} height={60} src={donut} alt="donut" />
                <div className="flex w-full items-center justify-between">
                  <div className="ml-2 flex flex-col gap-1 font-semibold">
                    <div className="text-sm">달콤한 도너츠</div>
                    <div className="text-xs">1500 원</div>
                  </div>
                  <div className="flex h-full items-end text-sm">
                    <div>2 개</div>
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
