'use client';
import React from 'react';
import Link from 'next/link';
import pageRoute from '@/app/_constants/path';
import Image from 'next/image';

type ItemCardPropTypes = {
  image: string;
  name: string;
  closeTime: string;
  storeId: number;
};

const ItemCard = ({ image, name, closeTime, storeId }: ItemCardPropTypes) => {
  return (
    <Link
      href={`${pageRoute.customer.storeDetail(storeId.toString())}`}
      className="w-full"
    >
      <div
        className="mb-2 flex items-center gap-2 rounded bg-white p-4"
        style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
      >
        <div className="relative h-14 w-14 overflow-hidden rounded">
          <Image
            priority
            fill
            alt={name}
            src={String(image)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex w-28 items-center">
          <div className="items- flex flex-col gap-1">
            <div className="w-20 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
              {name}
            </div>

            <div className="w-28 text-ellipsis whitespace-nowrap text-xs text-dark-gray">
              현재 거리로부터 100m
            </div>
          </div>
        </div>

        <div className="ml-auto mt-auto flex flex-col justify-end  gap-1 text-xs text-dark-gray">
          <div> 마감 시간 : {closeTime}</div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
