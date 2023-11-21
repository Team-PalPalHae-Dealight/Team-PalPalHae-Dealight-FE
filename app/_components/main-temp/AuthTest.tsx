'use client';

import pageRoute from '@/app/_constants/path';
import { useAuth } from '@/app/_providers/AuthProvider';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { axiosInstance } from '@/app/_services/apiClient';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

/**
 * @todo storeSignup과 memberSignup은 추후에 하나로 통일된다. 지금은 토큰값을 다르게 구분하기 위해 따로 설정한 상황이다.
 */

async function storeSignup() {
  await axiosInstance.get('https://jsonplaceholder.typicode.com/todos/1');

  return {
    accessToken: process.env.NEXT_PUBLIC_STORE_ACCESS_TOKEN!,
    refreshToken: process.env.NEXT_PUBLIC_STORE_REFRESH_TOKEN!,
  };
}

async function memberSignup() {
  await axiosInstance.get('https://jsonplaceholder.typicode.com/todos/1');

  return {
    accessToken: process.env.NEXT_PUBLIC_MEMBER_ACCESS_TOKEN!,
    refreshToken: process.env.NEXT_PUBLIC_MEMBER_REFRESH_TOKEN!,
  };
}

export default function AuthTest() {
  // const router = useRouter();
  const { login, logout } = useAuth();
  const { nickName, role } = useUserInfo();

  const onClickStoreSignup = () => {
    storeSignup().then(res => {
      // 토큰이 오면 로그인 처리, 토큰이 안오면 추가 회원가입 진행 처리
      login({ accessToken: res.accessToken, refreshToken: res.refreshToken });
    });
  };

  const onClickMemberSignup = () => {
    memberSignup().then(res => {
      // 토큰이 오면 로그인 처리, 토큰이 안오면 추가 회원가입 진행 처리
      login({ accessToken: res.accessToken, refreshToken: res.refreshToken });
      // router.push('/');
    });
  };

  console.log(nickName, role);

  return (
    <div className="flex flex-col gap-4 text-center">
      <div className="flex flex-col gap-4 border border-indigo-300">
        <h3>나는 업체</h3>
        <button onClick={onClickStoreSignup} className="bg-teal-300">
          업체 로그인 시도 (토큰을 넣습니다.)
        </button>

        <Link
          href={pageRoute.store.home()}
          scroll={false}
          className="bg-teal-300"
        >
          업체만 접근 가능한 페이지로 이동하기 (store-home)
        </Link>

        <p>성공시 닉네임과 토큰 두개가 온다.</p>
        <p>업체는 member에서 업체 정보 입력하면 role이 store로 변경된다.</p>
        <p>
          기존 회원이 아닌 경우: 추가 로그인 과정에서는 이름, 닉네임, 전화번호를
          받는다.
        </p>
        <p>
          고객인 경우: 추가 로그인 과정에서는 사업자 번호, 업체 이름, 업체
          전화번호, 업체 주소를 받는다. 여기서 role이 store로 변경된다.
        </p>
      </div>

      <div className="flex flex-col gap-4 border border-violet-300">
        <h3>나는 고객</h3>
        <button onClick={onClickMemberSignup} className="bg-teal-300">
          고객 로그인 시도 (토큰을 넣습니다.)
        </button>
        <Link href={pageRoute.customer.myPage('1')} className="bg-teal-300">
          고객만 접근 가능한 페이지로 이동하기 (mypage) + 해당 페이지는
          업체(role = store)도 모두 접근 가능하다!
        </Link>
        <p>성공시 닉네임과 토큰 두개가 온다.</p>
        <p>
          기존 회원이 아닌 경우: 추가 로그인 과정에서는 이름, 닉네임, 전화번호를
          받는다.
        </p>
      </div>

      <div className="flex flex-col border border-rose-300">
        <h3>나는 로그아웃</h3>
        <button onClick={logout} className="bg-teal-300">
          로그아웃 시도
        </button>
      </div>

      <button
        onClick={() => {
          login({
            accessToken: process.env.NEXT_PUBLIC_STORE_ACCESS_TOKEN!,
            refreshToken: process.env.NEXT_PUBLIC_STORE_REFRESH_TOKEN!,
          });
        }}
      >
        로그인 시도해봅니다!
      </button>
    </div>
  );
}
