'use client';

import pageRoute from '@/app/_constants/path';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function OnlyUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { role } = useUserInfo();

  useEffect(() => {
    if (role === 'member' || role === 'store') return;

    router.push(pageRoute.customer.home());
  }, [role, router]);

  if (!role) {
    return null;
  }

  return <section>{children}</section>;
}
