'use client';

import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { role } = useUserInfo();

  useEffect(() => {
    if (role === 'member') return;

    router.push('/');
  }, [role, router]);

  if (!role) {
    return null;
  }

  return <section>{children}</section>;
}
