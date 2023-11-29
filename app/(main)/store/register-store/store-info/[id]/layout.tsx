'use client';

import LocalStorage from '@/app/_utils/localstorage';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const storeInfo = LocalStorage.getItem('dealight-storeNumber');

  const router = useRouter();

  if (!storeInfo) {
    router.push('/');
    return null;
  }

  return <div>{children}</div>;
}
