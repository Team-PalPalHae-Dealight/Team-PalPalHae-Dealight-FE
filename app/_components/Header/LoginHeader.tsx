'use client';

import pageRoute from '@/app/_constants/path';
import { useAuth } from '@/app/_providers/AuthProvider';
import Link from 'next/link';

const LoginHeader = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? null : (
    <Link className="px-3" href={pageRoute.customer.login()}>
      로그인
    </Link>
  );
};

export default LoginHeader;
