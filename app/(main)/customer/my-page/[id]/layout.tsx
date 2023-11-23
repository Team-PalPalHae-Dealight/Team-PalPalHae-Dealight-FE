'use client';

import LocalStorage from '@/app/_utils/localstorage';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!LocalStorage.getItem('dealight-accessToken')) router.push('/');
  }, [router]);

  return <section>{children}</section>;
}
