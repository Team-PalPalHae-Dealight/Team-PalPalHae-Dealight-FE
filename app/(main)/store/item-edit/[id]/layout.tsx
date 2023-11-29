'use client';

// import { useRouter } from 'next/navigation';

// import { useAuth } from '@/app/_providers/AuthProvider';
// import { useUserInfo } from '@/app/_providers/UserInfoProvider';
// import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // const { role } = useUserInfo();
  // const { loggedIn } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (role === 'member' || !loggedIn) {
  //     router.push('/');
  //   }
  // }, [loggedIn, router, role]);

  // if (!role) {
  //   return null;
  // }

  return <div>{children}</div>;
}
