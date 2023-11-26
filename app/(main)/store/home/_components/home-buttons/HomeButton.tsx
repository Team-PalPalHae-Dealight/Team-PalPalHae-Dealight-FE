'use client';

import Link from 'next/link';
import Image from 'next/image';
import OrderList from '@/app/_assets/images/order-list.png';
import ProductRegistration from '@/app/_assets/images/product-registration.png';
import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';

type HomeButtonPropsType = {
  status: '영업 중' | '영업 준비 중';
};

const HomeButton = ({ status }: HomeButtonPropsType) => {
  const { providerId } = useUserInfo();
  const router = useRouter();

  const [popUp, setPopUp] = useState(false);

  return (
    <div className="mt-2.5 flex w-full gap-2">
      <Link
        className="relative w-full rounded-lg bg-white p-3 shadow"
        href={pageRoute.store.orderList(String(providerId))}
      >
        <b className="text-xl font-semibold">주문내역</b>
        <p className=" mb-7 mt-2.5 text-xs">
          한눈에 <br /> 주문 확인하기
        </p>
        <Image
          src={OrderList}
          priority
          alt="order-list"
          className="absolute bottom-2 right-2"
        />
      </Link>

      <button
        className={
          'relative flex w-full flex-col rounded-lg bg-white p-3 shadow'
        }
        onClick={() => {
          status === '영업 중'
            ? router.push(pageRoute.store.itemRegister())
            : setPopUp(true);
        }}
      >
        <b className="text-xl font-semibold">상품 등록</b>
        <p className="mb-7 mt-2.5 text-start text-xs">
          원하는 <br /> 상품 등록하기
        </p>
        <Image
          src={ProductRegistration}
          priority
          alt="product-registration"
          className="absolute bottom-2 right-2"
        />
      </button>

      {popUp && (
        <CustomPopUp
          btnClick={() => setPopUp(false)}
          btnText="확인"
          mainText="영업 상태를 확인해주세요."
        />
      )}
    </div>
  );
};

export default HomeButton;
