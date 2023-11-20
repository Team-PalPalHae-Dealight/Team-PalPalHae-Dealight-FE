'use client';

import { useUserInfo } from '@/app/_providers/UserInfoProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { role } = useUserInfo();

  console.log(role);
  return <div>{role === 'store' ? null : children}</div>;
}
