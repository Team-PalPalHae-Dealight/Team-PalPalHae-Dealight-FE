'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * @todo 라우팅 관련 네이밍 정해지면 href 변경
 */

const StartLink = () => {
  return (
    <div className="flex flex-col gap-14 p-12">
      <Link
        className="flex items-center justify-center rounded-2xl border-2 border-white bg-white p-8 text-2xl shadow transition hover:border-yellow-300"
        href="/"
      >
        <Image
          src="/shop-main.png"
          width={58}
          height={57}
          priority
          alt="shop main"
        />
        <b className="ml-5 font-semibold">사장 &nbsp;</b> 으로 시작
      </Link>

      <Link
        className="flex items-center justify-center rounded-2xl border-2 border-white bg-white p-8 text-2xl shadow transition hover:border-yellow-300"
        href="/"
      >
        <Image
          src="/user-main.png"
          width={58}
          height={57}
          priority
          alt="shop main"
        />
        <b className="ml-5 font-semibold">고객 &nbsp;</b> 으로 시작
      </Link>
    </div>
  );
};

export default StartLink;
