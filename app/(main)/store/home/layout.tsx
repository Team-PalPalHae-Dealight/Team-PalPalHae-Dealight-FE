'use client';

import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import RegisterModal from './_components/register-modal/RegisterModal';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { role } = useUserInfo();

  return <div>{role === 'store' ? children : <RegisterModal />}</div>;
}
