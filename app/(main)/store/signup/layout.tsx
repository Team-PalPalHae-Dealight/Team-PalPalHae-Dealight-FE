'use client';

import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function OnlyNotUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { role } = useUserInfo();

  useEffect(() => {
    if (!role) return;

    router.push('/');
  }, [role, router]);

  if (role === 'member' || role === 'store') {
    return null;
  }

  return <section>{children}</section>;
}
