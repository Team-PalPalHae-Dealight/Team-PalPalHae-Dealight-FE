'use client';

import pageRoute from '@/app/_constants/path';
import { useRouter } from 'next/navigation';

export default function Error() {
  const router = useRouter();

  return (
    <div>
      <h2>없는 상품입니다!</h2>
      <button onClick={() => router.push(pageRoute.store.home())}>
        홈으로 이동
      </button>
    </div>
  );
}
