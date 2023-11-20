'use client';

import { axiosInstance } from '@/app/_services/apiClient';
import LocalStorage from '@/app/_utils/localstorage';

async function signup() {
  const { provider, providerId } = LocalStorage.getItem('dealight-signup');

  const response = await axiosInstance.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
    {
      provider,
      providerId,
      nickName: 'nicknick',
      realName: '홍길동',
      phoneNumber: '01012345678',
    }
  );

  const data = response.data;

  return data;
}

export default function Page() {
  // const { nickName } = LocalStorage.getItem('dealight-signup');
  // console.log(nickName);
  // 업체 메인 페이지로 이동 or 업체 등록하기 페이지로 이동

  return (
    <h1>
      signup
      <button onClick={() => signup()}>회원가입 시도</button>
    </h1>
  );
}
