'use client';

import pageRoute from '@/app/_constants/path';
import LocalStorage from '@/app/_utils/localstorage';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const token = LocalStorage.getItem('dealight-accessToken');

  if (!token) {
    router.push(pageRoute.customer.login());
    return null;
  }

  return <div>{children}</div>;
}
