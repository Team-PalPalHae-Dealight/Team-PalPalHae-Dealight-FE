'use client';

import { useAuth } from '@/app/_providers/AuthProvider';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

async function storeSignup() {
  return {
    accessToken: `${process.env.NEXT_PUBLIC_STORE_ACCESS_TOKEN}`,
    refreshToken: `${process.env.NEXT_PUBLIC_STORE_REFRESH_TOKEN}`,
  };
}

async function memberSignup() {
  return {
    accessToken: `${process.env.NEXT_PUBLIC_MEMBER_ACCESS_TOKEN}`,
    refreshToken: `${process.env.NEXT_PUBLIC_MEMBER_REFRESH_TOKEN}`,
  };
}

export default function AuthTest() {
  const { login, logout } = useAuth();
  const userInfo = useUserInfo();

  const onClickStoreSignup = () => {
    storeSignup().then(res => {
      login({ accessToken: res.accessToken, refreshToken: res.refreshToken });
    });
  };

  const onClickMemberSignup = () => {
    memberSignup().then(res => {
      login({ accessToken: res.accessToken, refreshToken: res.refreshToken });
    });
  };

  console.log(userInfo);

  return (
    <div className="flex gap-4 text-center">
      <div className="flex flex-col gap-4 border border-indigo-300">
        <h3>나는 업체</h3>
        <button onClick={onClickStoreSignup} className="bg-teal-300">
          업체 로그인
        </button>
      </div>

      <div className="flex flex-col gap-4 border border-violet-300">
        <h3>나는 고객</h3>
        <button onClick={onClickMemberSignup} className="bg-teal-300">
          고객 로그인
        </button>
      </div>

      <div className="flex flex-col gap-4 border border-rose-300">
        <h3>나는 로그아웃</h3>

        <button onClick={logout} className="bg-teal-300">
          로그아웃
        </button>
      </div>
    </div>
  );
}
