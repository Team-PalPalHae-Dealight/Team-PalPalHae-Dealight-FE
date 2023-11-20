'use client';

import { useUserInfo } from '@/app/_providers/UserInfoProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { role } = useUserInfo();

  return <div>{role === 'store' ? null : children}</div>;
}
