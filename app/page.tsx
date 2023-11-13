import StartLink from './_components/main-temp/StartLink';
import Banner from './_assets/images/banner.png';
import Image from 'next/image';
import ServiceIntro from './_components/main-temp/ServiceIntro';
import { MswTestButton } from './_components/main-temp/MswTestButton';
import Link from 'next/link';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getTodos, todoKeys } from './_hooks/query/tempTodo';
import QueryTest from './_components/main-temp/QueryTest';
import ApiTest from './_components/main-temp/ApiTest';
import pageRoute from './_constants/path';
import Header from './_components/Header/Header';
import CustomerHeader from './_components/Header/CustomerHeader';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [todoKeys.all],
    queryFn: getTodos,
  });

  return (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <Image src={Banner} priority alt="banner" />

      <StartLink />
      <ServiceIntro />
      <MswTestButton />

      <div className="flex flex-col border border-indigo-400 p-2">
        <h2>상품과 관련된 테스트를 진행합니다.</h2>
        <Link href={pageRoute.store.itemDetail('1')}>
          특정(1번) 상품 페이지로 가기
        </Link>
        <Link href={pageRoute.store.registerItem()}>상품 등록하러 가기</Link>
      </div>

      <ApiTest />
      <Header />
      <CustomerHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <QueryTest />
      </HydrationBoundary>
    </main>
  );
}
