'use client';

import Link from 'next/link';
import StoreManage from '@/app/_assets/svgs/store-manage.svg';
import ItemManage from '@/app/_assets/svgs/item-manage.svg';
import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

const ManageButton = () => {
  const { providerId } = useUserInfo();

  return (
    <div className="mb-5 flex w-full gap-2">
      <Link
        className="flex w-full cursor-pointer flex-col items-start justify-center rounded-lg bg-white shadow"
        href={
          providerId
            ? pageRoute.store.storeManage(String(providerId))
            : pageRoute.store.login()
        }
      >
        <button className="w-full">
          <div className="w-full p-3.5 text-left">
            <b className="text-xl font-semibold">업체 관리하기</b>
            <p className="pt-2.5 text-xs">
              한눈에 <br /> 업체 확인하기
            </p>
          </div>

          <div className="flex justify-end">
            <StoreManage className="h-10 w-10" />
          </div>
        </button>
      </Link>
      <Link
        className="flex w-full cursor-pointer flex-col items-start justify-center rounded-lg bg-white shadow"
        href={
          providerId
            ? pageRoute.store.itemManage(String(providerId))
            : pageRoute.store.login()
        }
      >
        <button className="w-full">
          <div className="w-full p-3.5 text-left">
            <b className="text-xl font-semibold">상품 관리하기</b>
            <p className="pt-2.5 text-xs">
              등록한 <br /> 상품 확인하기
            </p>
          </div>

          <div className="flex justify-end">
            <ItemManage className="h-10 w-10" />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ManageButton;
