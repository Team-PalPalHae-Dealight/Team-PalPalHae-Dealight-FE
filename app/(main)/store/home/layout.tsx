'use client';

import RegisterModal from '@/app/_components/register-modal/RegisterModal';
import { useAuth } from '@/app/_providers/AuthProvider';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { role } = useUserInfo();
  const { loggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loggedIn) return;

    router.push('/');
  }, [loggedIn, router]);

  if (!role) {
    return null;
  }

  return <div>{role === 'store' ? children : <RegisterModal />}</div>;
}
