import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import MyPageContents from './_components/MyPageContents/MyPageContents';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Suspense } from 'react';
import { getMyProfile } from '@/app/_hooks/query/member';

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['user-info'],
    queryFn: () => getMyProfile(),
  });

  return (
    <div className="flex flex-col items-center">
      <CustomerHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>server render</div>}>
          <div className="w-full px-5">
            <MyPageContents />
          </div>
        </Suspense>
      </HydrationBoundary>
      <CustomerFooter />
    </div>
  );
};

export default Page;
