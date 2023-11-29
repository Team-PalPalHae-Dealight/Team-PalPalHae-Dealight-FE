'use client';

import Image from 'next/image';
import Link from 'next/link';
import ShopMain from '@/app/_assets/images/shop-main.png';
import UserMain from '@/app/_assets/images/user-main.png';
import pageRoute from '@/app/_constants/path';
import { useAuth } from '@/app/_providers/AuthProvider';
import { useRouter } from 'next/navigation';

const StartLink = () => {
  const { loggedIn } = useAuth();
  const router = useRouter();

  return (
    <div className="mt-2.5 flex w-full gap-2">
      <button
        className="relative w-full rounded-lg bg-white px-1.5 py-3.5 text-left shadow"
        onClick={() =>
          router.push(
            loggedIn ? pageRoute.store.home() : pageRoute.store.login(),
            { scroll: false }
          )
        }
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
      </button>

      <Link
        className="relative w-full rounded-lg bg-white px-1.5 py-3.5 shadow"
        href={pageRoute.customer.home()}
        scroll={false}
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
