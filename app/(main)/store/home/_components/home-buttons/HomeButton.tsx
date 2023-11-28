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

  const [onPopUp, setOnPopUp] = useState(false);

  return (
    <div className="mt-2.5 flex w-full gap-2">
      <Link
        className="relative w-full rounded-lg bg-white p-3 shadow"
        href={
          status === '영업 중'
            ? pageRoute.store.orderList(String(providerId))
            : ''
        }
        onClick={() => status === '영업 준비 중' && setOnPopUp(true)}
        scroll={false}
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
            ? router.push(pageRoute.store.itemRegister(), { scroll: false })
            : setOnPopUp(true);
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

      {onPopUp && (
        <CustomPopUp
          mainText="영업을 시작 해주세요."
          subText="주문 내역을 확인하거나 상품을 등록하려면 영업을 시작하셔야 합니다."
          btnText="영업 시작하러 가기"
          btnClick={() => setOnPopUp(false)}
        />
      )}
    </div>
  );
};

export default HomeButton;
