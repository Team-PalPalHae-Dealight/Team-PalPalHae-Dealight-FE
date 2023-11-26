'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const providerId = useParams();

  useEffect(() => {
    if (providerId) return;

    router.push('/');
  }, [providerId, router]);

  if (!providerId) {
    return null;
  }

  return <section>{children}</section>;
}
