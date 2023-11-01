'use client';

import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import Kakao from '../../../_assets/images/kakao.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center px-5">
      <h1 className="mt-52 text-center text-xl font-semibold">
        함께하는 즐거움,
        <br />
        딜라잇(Dealight)!
      </h1>

      <p className="mt-4 text-center text-sm font-semibold">
        간편하게 로그인하고
        <br />
        딜라잇(Dealight) 서비스를 이용해보세요
      </p>

      <PrimaryButton
        onClick={() => router.push('/')}
        className="mt-16 flex items-center justify-center gap-1"
      >
        <Image src={Kakao} alt="kakao" />
        카카오 로그인
      </PrimaryButton>

      <Link
        href="/"
        className="mt-28 text-xs font-semibold text-dark-gray underline"
      >
        시작 페이지로 돌아가기
      </Link>
    </main>
  );
}
