'use client';

import Image from 'next/image';
import { useState } from 'react';
import PLUS_IMAGE from '@/app/_assets/images/plus.png';
import MINUS_IMAGE from '@/app/_assets/images/minus.png';
import PopUp from '@/app/_components/pop-up/PopUp';
import { useRouter } from 'next/navigation';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useDeleteCart, usePatchCart } from '@/app/_hooks/query/cart';
import { useQueryClient } from '@tanstack/react-query';

type ItemCardPropsType = {
  itemId: number;
  image: string;
  title: string;
  price: number;
  stock: number;
  count: number;
};

type QuantityType = {
  itemId: number;
  quantity: number;
};

const ItemCard = ({
  itemId,
  image,
  title,
  price,
  stock,
  count,
}: ItemCardPropsType) => {
  const [newQuantity, setNewQuantity] = useState(stock ? count : 0);
  const [open, setOpen] = useState(false);

  const { providerId } = useUserInfo();
  const { mutate: patchCart } = usePatchCart();
  const { mutate: deleteCart } = useDeleteCart();

  const queryClient = useQueryClient();
  const router = useRouter();

  const handlePlus = () => {
    if (newQuantity < stock) {
      setNewQuantity(prev => prev + 1);
      changeCart({ itemId, quantity: newQuantity + 1 });
    }
  };

  const handleMinus = () => {
    if (newQuantity > 1) {
      setNewQuantity(prev => prev - 1);
      changeCart({ itemId, quantity: newQuantity - 1 });
    }
  };

  const changeCart = async ({ itemId, quantity }: QuantityType) => {
    patchCart(
      { cartItem: { carts: [{ itemId, quantity }] } },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
      }
    );
  };

  const deleteCard = () => {
    setOpen(true);
  };

  const popupRightBtnClick = async () => {
    setOpen(false);
    await deleteCart(
      { itemId },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
      }
    );
  };

  return (
    <div className="flex h-22.5 w-full justify-between rounded bg-white p-2 shadow-sm">
      <div className="flex w-full items-center">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded">
          <Image
            priority
            fill
            alt={image}
            src={String(image)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-between pl-3">
          <div className="w-3/4 max-w-[200px] flex-1 truncate text-sm font-semibold">
            {title}
          </div>
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
            <div className="flex justify-around pr-2">
              <button className="pointer-cursor" onClick={handleMinus}>
                <Image src={MINUS_IMAGE} width={10} height={10} alt="plus" />
              </button>
              <div className="px-2.5 text-sm font-semibold">{newQuantity}</div>
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
          rightBtnClick={popupRightBtnClick}
        />
      )}
    </div>
  );
};

export default ItemCard;
