'use client';

import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { role } = useUserInfo();
  const router = useRouter();

  if (!role) {
    router.push(pageRoute.customer.login());
    return null;
  }

  return <div>{children}</div>;
}
