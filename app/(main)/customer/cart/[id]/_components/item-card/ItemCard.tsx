'use client';

import Image from 'next/image';
import { useState } from 'react';
import PLUS_IMAGE from '@/app/_assets/images/plus.png';
import MINUS_IMAGE from '@/app/_assets/images/minus.png';

type ItemCardPropsType = {
  image: string;
  title: string;
  price: number;
  stock: number;
  count: number;
};

const ItemCard = ({ image, title, price, stock, count }: ItemCardPropsType) => {
  const [quantity, setQuantity] = useState(stock ? count : 0);

  const handlePlus = () => {
    if (quantity < stock) setQuantity(prev => prev + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="flex h-22.5 w-full justify-between rounded bg-white p-4 shadow-md">
      <div className="flex">
        <Image src={image} width={60} height={60} alt="item" />
        <div className="flex flex-col justify-between pl-2">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs font-semibold">{`${price} 원`}</div>
          <div className="text-xs">{stock ? `최대 ${stock}개` : '품절'}</div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <button className="text-xs text-dark-gray">삭제</button>
        <div>
          {stock ? (
            <div className="flex justify-around">
              <button className="pointer-cursor" onClick={handleMinus}>
                <Image src={MINUS_IMAGE} width={10} height={10} alt="plus" />
              </button>
              <div className="px-2.5 text-sm font-semibold">{quantity}</div>
              <button className="pointer-cursor" onClick={handlePlus}>
                <Image src={PLUS_IMAGE} width={10} height={10} alt="plus" />
              </button>
            </div>
          ) : (
            <div>재고없음</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
