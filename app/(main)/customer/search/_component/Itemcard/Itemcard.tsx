'use client';
import React from 'react';
import Seveneleven from 'app/(main)/customer/search/_component/assets/seveneleven.svg';
type ItemCardPropTypes = {
  image: string;
  distance: string;
  storeName: string;
  storeCloseTime: string;
};

const ItemCard = ({
  image,
  distance,
  storeName,
  storeCloseTime,
}: ItemCardPropTypes) => {
  console.log(image);
  return (
    <div
      className=" item-between mb-3 flex w-full flex-row gap-3 rounded-md bg-white p-2"
      style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
    >
      <Seveneleven className="w-7h-7" />
      <div className="flex flex-col">
        <div className="font-inter font-semibold text-black">{storeName}</div>
        <div className="text-right text-xs font-semibold leading-normal text-dark-gray">
          <span>현재 위치로부터 {distance}</span>
        </div>
      </div>
      <div className="font-inter flex pl-8 pt-10 text-right text-xs font-semibold leading-normal text-dark-gray">
        <p>마감 시간: {storeCloseTime}</p>
      </div>
    </div>
  );
};

export default ItemCard;
