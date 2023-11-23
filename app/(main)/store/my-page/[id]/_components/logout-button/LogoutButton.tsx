'use client';

import { useAuth } from '@/app/_providers/AuthProvider';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <button
      className="mb-5 h-12 w-full rounded-md bg-light-gray text-base text-red"
      onClick={() => {
        logout();
        router.push('/');
      }}
      style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
