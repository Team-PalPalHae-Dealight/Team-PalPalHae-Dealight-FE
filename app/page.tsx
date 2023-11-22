import StartLink from './_components/main-temp/StartLink';
import Banner from './_assets/images/banner.png';
import Image from 'next/image';
import ServiceIntro from './_components/main-temp/ServiceIntro';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getTodos, todoKeys } from './_hooks/query/tempTodo';
import QueryTest from './_components/main-temp/QueryTest';
import Header from './_components/Header/Header';
import AuthTest from './_components/main-temp/AuthTest';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [todoKeys.all],
    queryFn: getTodos,
  });

  return (
    <>
      <Header />

      <div className="flex flex-col items-center px-5 pt-4">
        <div className="relative h-44 w-full">
          <Image
            src={Banner}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="banner"
          />
        </div>

        <StartLink />
        <ServiceIntro />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <QueryTest />
        </HydrationBoundary>

        <div className="flex flex-col border border-sky-400 p-2">
          <h2>로그인과 관련된 테스트</h2>

          <AuthTest />
        </div>
      </div>
    </>
  );
}
