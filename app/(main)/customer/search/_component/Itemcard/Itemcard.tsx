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
        className=" item-between mb-3 flex w-full flex-row gap-3 rounded-md bg-white p-2"
        style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
      >
        <div className="relative h-24 w-32">
          <Image
            src={`/${image}`}
            alt="상품 이미지"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-col">
          <div className="font-inter font-semibold text-black">{name}</div>
          <div className="w-32 text-left text-xs font-semibold leading-normal text-dark-gray">
            <span>현재 위치로부터 100m</span>
          </div>
        </div>
        <div className="font-inter ml-16 mt-16 flex text-right text-xs font-semibold leading-normal text-dark-gray">
          <p>마감 시간:{closeTime}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
