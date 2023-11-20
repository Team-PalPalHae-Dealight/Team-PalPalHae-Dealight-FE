'use client';

import pageRoute from '@/app/_constants/path';
import { useAuth } from '@/app/_providers/AuthProvider';
import { axiosInstance } from '@/app/_services/apiClient';
import LocalStorage from '@/app/_utils/localstorage';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

type SignupNewUserType = {
  provider: string;
  providerId: number;
  nickName: string;
};

async function getKakaoInfo(code: string) {
  const response = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/kakao?code=${code}`
  );

  return response;
}

const Page = () => {
  const router = useRouter();
  const { login } = useAuth();

  const signupNewUser = useCallback(
    ({ provider, providerId, nickName }: SignupNewUserType) => {
      LocalStorage.setItem('dealight-signup', {
        provider,
        providerId,
        kakaoNickName: nickName,
      });

      if (LocalStorage.getItem('dealight-lastLoginPage') === 'customer') {
        router.push(pageRoute.customer.signup());
        return;
      }

      if (LocalStorage.getItem('dealight-lastLoginPage') === 'store') {
        router.push(pageRoute.store.signup());
        return;
      }
    },
    [router]
  );

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get(
      'code'
    )!;

    getKakaoInfo(code).then(res => {
      const data = res.data;

      if (data.message === '딜라이트 서비스에 가입이 필요합니다.') {
        const { provider, providerId, nickName } = data;
        signupNewUser({ provider, providerId, nickName });
        return;
      }

      const { accessToken, refreshToken } = data;
      login({ accessToken, refreshToken });
    });
  }, [router, login, signupNewUser]);

  return null;
};

export default Page;
