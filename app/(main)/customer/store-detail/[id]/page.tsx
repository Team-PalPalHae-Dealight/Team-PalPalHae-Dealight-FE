import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import StoreDetail from './_components/StoreDetail';
import { Suspense } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getStore, storeKeys } from '@/app/_hooks/query/store';
import { getStoreReviews, reviewKeys } from '@/app/_hooks/query/review';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';

export default async function Page({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: storeKeys.store(params.id),
    queryFn: () => getStore({ storeId: params.id }),
  });

  await queryClient.prefetchQuery({
    queryKey: reviewKeys.storeReviews(params.id),
    queryFn: () => getStoreReviews({ storeId: params.id }),
  });

  return (
    <>
      <CustomerHeader />

      <div className="flex flex-col items-center gap-5 px-5 pt-7">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<div>server loading</div>}>
            <StoreDetail storeId={params.id} />
          </Suspense>
        </HydrationBoundary>
      </div>

      <CustomerFooter />
    </>
  );
}
