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
import ApiTest from './_components/main-temp/ApiTest';

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

      <ApiTest />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <QueryTest />
      </HydrationBoundary>
    </main>
  );
}
