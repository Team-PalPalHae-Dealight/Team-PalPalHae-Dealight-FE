'use client';

import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { role } = useUserInfo();
  const router = useRouter();

  if (role !== 'store') {
    router.push('/');
    return null;
  }

  return <>{children}</>;
}
