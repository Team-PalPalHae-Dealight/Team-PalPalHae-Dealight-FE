'use client';

import Image from 'next/image';
import Link from 'next/link';
import ShopMain from '../../_assets/images/shop-main.png';
import UserMain from '../../_assets/images/user-main.png';
import pageRoute from '@/app/_constants/route';

/**
 * @todo 라우팅 관련 네이밍 정해지면 href 변경
 */

const StartLink = () => {
  return (
    <div className="mt-2.5 flex w-full gap-2">
      <Link
        className="relative w-full rounded-lg bg-white px-1.5 py-3.5 shadow"
        href={pageRoute.store.login()}
      >
        <b className="text-xl font-semibold">사장</b>
        <p className="mt-2.5 text-xs">
          사장님으로 <br /> 활동하기
        </p>
        <Image
          src={ShopMain}
          priority
          alt="shop main"
          className="absolute bottom-0 right-0"
        />
      </Link>

      <Link
        className="relative w-full rounded-lg bg-white px-1.5 py-3.5 shadow"
        href={pageRoute.customer.login()}
      >
        <b className="text-xl font-semibold">고객</b>
        <p className="mt-2.5 text-xs">
          고객님으로 <br /> 활동하기
        </p>
        <Image
          src={UserMain}
          priority
          alt="user main"
          className="absolute bottom-0 right-0"
        />
      </Link>
    </div>
  );
};

export default StartLink;
