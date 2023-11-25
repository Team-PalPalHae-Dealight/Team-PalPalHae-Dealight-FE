'use client';
import React from 'react';
import Seveneleven from 'app/(main)/customer/search/_component/assets/seveneleven.svg';
import Link from 'next/link';
type ItemCardPropTypes = {
  image: string;
  name: string;
  closeTime: string;
};

const ItemCard = ({ image, name, closeTime }: ItemCardPropTypes) => {
  console.log(image, name, closeTime);

  return (
    <Link href="/" className="w-full">
      <div
        className=" item-between mb-3 flex w-full flex-row gap-3 rounded-md bg-white p-2"
        style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
      >
        <Seveneleven className="w-7h-7" />
        <div className="flex flex-col">
          <div className="font-inter font-semibold text-black">{name}</div>
          <div className="w-32 text-left text-xs font-semibold leading-normal text-dark-gray">
            <span>현재 위치로부터 100m</span>
          </div>
        </div>
        <div className="font-inter flex-3 flex pl-28 pt-10 text-right text-xs font-semibold leading-normal text-dark-gray">
          <p>마감 시간: {closeTime}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
