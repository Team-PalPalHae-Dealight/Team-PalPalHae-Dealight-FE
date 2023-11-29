'use client';

import Image from 'next/image';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import PLUS_IMAGE from '@/app/_assets/images/plus.png';
import MINUS_IMAGE from '@/app/_assets/images/minus.png';
import PopUp from '@/app/_components/pop-up/PopUp';
import { useRouter } from 'next/navigation';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { patchCart } from '../../_services/patchCart';
import { deleteCart } from '../../_services/deleteCart';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';
import { CartType } from '../../_types/CartType';

type ItemCardPropsType = {
  _id: number;
  image: string;
  title: string;
  price: number;
  stock: number;
  count: number;
  setData: Dispatch<SetStateAction<CartType[] | undefined>>;
  data: CartType[] | undefined;
};

const ItemCard = ({
  _id,
  image,
  title,
  price,
  stock,
  count,
  setData,
  data,
}: ItemCardPropsType) => {
  const [newQuantity, setNewQuantity] = useState(stock ? count : 0);
  const [open, setOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const [message, setMessage] = useState('');

  const { providerId } = useUserInfo();
  const router = useRouter();

  const handlePlus = () => {
    if (newQuantity < stock) {
      setNewQuantity(prev => prev + 1);
    }
  };

  const handleMinus = () => {
    if (newQuantity > 1) {
      setNewQuantity(prev => prev - 1);
    }
  };

  const changeQuantity = useCallback(async () => {
    const res = await patchCart({
      carts: [{ itemId: _id, quantity: newQuantity }],
    });
    if (res.status !== 200) {
      setCustomOpen(true);
      setMessage(res.message);
    } else {
      const newData = data?.map((value: CartType) => {
        const {
          cartId,
          itemId,
          storeId,
          memberProviderId,
          itemName,
          stock,
          discountPrice,
          itemImage,
          quantity,
          storeName,
          storeCloseTime,
          expirationDateTime,
        } = value;
        if (itemId === _id) {
          return {
            cartId,
            itemId,
            storeId,
            memberProviderId,
            itemName,
            stock,
            discountPrice,
            itemImage,
            quantity: newQuantity,
            storeName,
            storeCloseTime,
            expirationDateTime,
          };
        } else {
          return {
            cartId,
            itemId,
            storeId,
            memberProviderId,
            itemName,
            stock,
            discountPrice,
            itemImage,
            quantity,
            storeName,
            storeCloseTime,
            expirationDateTime,
          };
        }
      });

      setData(newData);
    }
    //eslint-disable-next-line
  }, [_id, newQuantity]);

  const deleteCard = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (stock) {
      changeQuantity();
    }
  }, [stock, changeQuantity]);

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
          rightBtnClick={async () => {
            setOpen(false);
            await deleteCart(_id);
            window.location.reload();
          }}
        />
      )}
      {customOpen && (
        <CustomPopUp
          mainText={message}
          btnText="확인"
          btnClick={() => window.location.reload()}
        />
      )}
    </div>
  );
};

export default ItemCard;
