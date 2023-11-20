'use client';

import pageRoute from '@/app/_constants/path';
import { useAuth } from '@/app/_providers/AuthProvider';
import { axiosInstance } from '@/app/_services/apiClient';
import LocalStorage from '@/app/_utils/localstorage';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type SignupType = {
  provider: string;
  providerId: number;
  realName: string;
  nickName: string;
  phoneNumber: string;
};

async function signup(props: SignupType) {
  const response = await axiosInstance.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
    { ...props }
  );

  const data = response.data;

  return data;
}

/**
 * @todo 로컬스토리지 관련 에러 처리 작업 필요
 */

export default function Page() {
  const { kakaoNickName, provider, providerId } = LocalStorage.getItem(
    'dealight-signup'
  ) ?? {
    kakaoNickName: '',
    provider: '',
    providerId: 0,
  };

  const [realName, setRealName] = useState('');
  const [nickName, setNickName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const router = useRouter();

  const { login } = useAuth();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signup({
      nickName,
      phoneNumber,
      provider,
      providerId,
      realName,
    }).then(({ accessToken, refreshToken }) => {
      login({ accessToken, refreshToken });
      router.push(pageRoute.customer.home());
    });
  };

  useEffect(() => {
    setNickName(kakaoNickName);
  }, [kakaoNickName]);

  return (
    <>
      <h1>sign up</h1>

      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="이름"
          onChange={e => setRealName(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="닉네임"
          onChange={e => setNickName(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="전화 번호"
          onChange={e => setPhoneNumber(e.currentTarget.value)}
        />
        <button>제출</button>
      </form>
    </>
  );
}
