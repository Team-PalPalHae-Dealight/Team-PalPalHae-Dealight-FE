'use client';

import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function OnlyStoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { role } = useUserInfo();

  useEffect(() => {
    if (role === 'store') return;

    router.push(pageRoute.store.home());
  }, [role, router]);

  if (!role || role === 'member') {
    return null;
  }

  return <section>{children}</section>;
}
