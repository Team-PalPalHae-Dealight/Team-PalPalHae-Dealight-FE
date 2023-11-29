import Header from '@/app/_components/Header/Header';
import ItemDetail from './_components/ItemDetail';
import { Suspense } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getItem, itemKeys } from '@/app/_hooks/query/item';
import StoreFooter from '@/app/_components/Footer/StoreFooter';
import Spinner from '@/app/_components/spinner/Spinner';

const Page = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: itemKeys.item(params.id),
    queryFn: () => getItem({ itemId: params.id }),
  });

  return (
    <>
      <Header />

      <div className="flex flex-col items-center px-5 pb-20 pt-7">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<Spinner />}>
            <ItemDetail itemId={params.id} />
          </Suspense>
        </HydrationBoundary>
      </div>

      <StoreFooter />
    </>
  );
};

export default Page;
