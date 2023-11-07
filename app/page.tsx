'use client';

import StartLink from './_components/main-temp/StartLink';
import Banner from './_assets/images/banner.png';
import Image from 'next/image';
import ServiceIntro from './_components/main-temp/ServiceIntro';
import { MswTestButton } from './_components/main-temp/MswTestButton';
import Link from 'next/link';
import pageRoute from './_constants/route';

async function postApi() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items?memberId=1`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({
        name: '떡볶이',
        stock: 1,
        discountPrice: 233,
        originalPrice: 2,
        description: null,
        information: '안내',
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    if (data.message) {
      throw new Error(data.message);
    }

    throw new Error('알 수 없는 에러');
  }

  console.log(data);
  return data;
}

async function getApi() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/stores/profiles/1/1`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    if (data.message) {
      throw new Error(data.message);
    }

    throw new Error('알 수 없는 에러');
  }

  return data;
}

export default function Home() {
  const onClickPost = () => {
    postApi();
  };

  const onClickGet = () => {
    getApi()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <Image src={Banner} priority alt="banner" />

      <StartLink />
      <ServiceIntro />
      <MswTestButton />

      <div className="flex flex-col border border-indigo-400 p-2">
        <h2>상품과 관련된 테스트를 진행합니다.</h2>
        <Link href={pageRoute.store.productDetail('1')}>
          특정(1번) 상품 페이지
        </Link>
      </div>

      <button onClick={onClickPost}>POST api 연결 테스트 버튼</button>
      <button onClick={onClickGet}>GET api 연결 테스트 버튼</button>
    </main>
  );
}
