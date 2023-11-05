'use client';

import { ResponseItemTypes } from '@/app/_components/infinite-scroll/fetchData';
import Link from 'next/link';

export type ItemTypes = {
  items: ResponseItemTypes[] | null;
};

const Items = ({ items }: ItemTypes) => {
  // 리스트 카드
  return (
    <>
      {items ? (
        items.map(item => {
          return (
            <Link key={item.id} href={'/asd'}>
              <div className="m-2 h-14 border-2 border-black">
                <div>{item.id}</div>
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

export default Items;
