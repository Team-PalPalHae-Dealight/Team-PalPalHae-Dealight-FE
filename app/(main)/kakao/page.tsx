'use client';

// import { useAuth } from '@/app/_providers/AuthProvider';
import { axiosInstance } from '@/app/_services/apiClient';
// import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  // const { login } = useAuth();

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    console.log(code);

    axiosInstance
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/kakao?code=${code}`)
      .then(res => console.log(res));
  }, []);

  return null;
};

export default Page;
