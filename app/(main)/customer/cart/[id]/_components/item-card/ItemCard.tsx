'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import PLUS_IMAGE from '@/app/_assets/images/plus.png';
import MINUS_IMAGE from '@/app/_assets/images/minus.png';
import { deleteCart } from '../../_services/deleteCart';
import PopUp from '@/app/_components/pop-up/PopUp';
import { useRouter } from 'next/navigation';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { patchCart } from '../../_services/patchCart';

type ItemCardPropsType = {
  itemId: number;
  image: string;
  title: string;
  price: number;
  stock: number;
  count: number;
};

const ItemCard = ({
  itemId,
  image,
  title,
  price,
  stock,
  count,
}: ItemCardPropsType) => {
  const [quantity, setQuantity] = useState(stock ? count : 0);
  const [open, setOpen] = useState(false);

  const { providerId } = useUserInfo();
  const router = useRouter();

  const handlePlus = async () => {
    if (quantity < stock) setQuantity(prev => prev + 1);
  };

  const handleMinus = async () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const changeQuantity = useCallback(async () => {
    await patchCart({
      carts: [
        {
          itemId: itemId,
          quantity: quantity,
        },
      ],
    });
  }, [itemId, quantity]);

  const deleteCard = () => {
    setOpen(true);
  };

  useEffect(() => {
    changeQuantity();
  }, [changeQuantity]);

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
        <button className="text-xs text-dark-gray" onClick={deleteCard}>
          삭제
        </button>
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
      {open && (
        <PopUp
          mainText="선택한 상품을 장바구니에서 삭제하시겠습니까?"
          leftBtnText="취소"
          leftBtnClick={() => {
            providerId ? setOpen(false) : router.push('/');
          }}
          rightBtnText="삭제"
          rightBtnClick={async () => {
            setOpen(false);
            await deleteCart(itemId);
            window.location.reload();
          }}
        />
      )}
    </div>
  );
};

export default ItemCard;
