'use client';

// import { axiosInstance } from '@/app/_services/apiClient';
// import LocalStorage from '@/app/_utils/localstorage';

// async function signup() {
//   const { provider, providerId, nickName } =
//     LocalStorage.getItem('dealight-signup');

//   const response = await axiosInstance.post(
//     `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
//     {
//       provider,
//       providerId,
//       nickName,
//       realName: '이종길 진짜 이름',
//       phoneNumber: '01091063310',
//     }
//   );

//   const data = response.data;

//   return data;
// }

export default function Page() {
  // 업체 메인 페이지로 이동 or 업체 등록하기 페이지로 이동

  return <h1>signup</h1>;
}
