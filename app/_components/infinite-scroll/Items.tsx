'use client';

import { Item } from '@/app/_components/infinite-scroll/fetchData';
import Link from 'next/link';

export type ItemTypes = {
  items: Item[] | null;
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
                <span>{item.title}</span>
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
