'use client';

import pageRoute from '@/app/_constants/path';
import { useRouter } from 'next/navigation';

export default function Error() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-2 text-center">
      <h2 className="text-lg font-semibold">존재하지 않는 상품입니다.</h2>
      <button onClick={() => router.push(pageRoute.store.home())}>
        홈으로 이동
      </button>
    </div>
  );
}
