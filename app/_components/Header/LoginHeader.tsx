'use client';

import pageRoute from '@/app/_constants/path';
import { useAuth } from '@/app/_providers/AuthProvider';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LoginHeader = () => {
  const [mounted, setMounted] = useState(false);

  const { loggedIn } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted &&
    !loggedIn && <Link href={pageRoute.customer.login()}>로그인</Link>
  );
};

export default LoginHeader;
