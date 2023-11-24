'use client';

import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { postCart } from '../../../cart/[id]/_services/postCart';
import { useState } from 'react';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';
import PopUp from '@/app/_components/pop-up/PopUp';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

type ItemIdType = {
  itemId: string;
};

const BottomButtons = ({ itemId }: ItemIdType) => {
  const [customOpen, setCustomOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const router = useRouter();
  const { providerId } = useUserInfo();

  const putCart = async () => {
    const res = await postCart({
      req: {
        itemId: Number(itemId),
        cartAdditionType: 'check',
      },
    });

    if (res.status !== 200) {
      if (res.data.code === 'CT003' || res.data.code === 'CT005') {
        setOpen(true);
      } else {
        setCustomOpen(true);
      }
      setMessage(res.data.message);
    } else {
      setMessage('해당 상품이 장바구니에 담겼습니다.');
      setCustomOpen(true);
    }
  };

  const clearCart = async () => {
    const res = await postCart({
      req: {
        itemId: Number(itemId),
        cartAdditionType: 'clear',
      },
    });
    console.log(res);

    setMessage('해당 상품이 장바구니에 담겼습니다.');
    setCustomOpen(true);
  };

  const orderCart = async () => {
    const res = await postCart({
      req: {
        itemId: Number(itemId),
        cartAdditionType: 'check',
      },
    });

    if (res.status !== 200) {
      if (res.data.code === 'CT003' || res.data.code === 'CT005') {
        setOpen(true);
      } else {
        setCustomOpen(true);
      }
      setMessage(res.data.message);
    } else {
      router.push(
        providerId ? pageRoute.customer.cart(String(providerId)) : '/'
      );
    }
  };

  return (
    <div className="flex w-full gap-5">
      <PrimaryButton onClick={putCart}>장바구니 담기</PrimaryButton>
      <PrimaryButton onClick={orderCart}>주문하기</PrimaryButton>
      {customOpen && (
        <CustomPopUp
          mainText={message}
          btnText="다른 상품 둘러보기"
          btnClick={() => router.push(pageRoute.customer.home())}
        />
      )}
      {open && (
        <PopUp
          mainText={message}
          subText="선택하신 상품을 장바구니에 담을 경우 이전에 담은 상품이 모두 삭제됩니다."
          leftBtnText="취소"
          leftBtnClick={() =>
            router.push(pageRoute.customer.itemDetail(itemId))
          }
          rightBtnText="담기"
          rightBtnClick={clearCart}
        />
      )}
    </div>
  );
};

export default BottomButtons;
