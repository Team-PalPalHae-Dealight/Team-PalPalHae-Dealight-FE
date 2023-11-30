'use client';

import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import LocalStorage from '@/app/_utils/localstorage';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const token = LocalStorage.getItem('dealight-accessToken');
  const { role } = useUserInfo();

  if (!token) {
    router.push(pageRoute.customer.login());
    return null;
  }

  if (!role) {
    return null;
  }

  return <section>{children}</section>;
}
