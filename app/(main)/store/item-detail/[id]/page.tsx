import Header from '@/app/_components/Header/Header';
import ItemDetail from './_components/ItemDetail';
import { Suspense } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getItem, itemKeys } from '@/app/_hooks/query/item';

const Page = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: itemKeys.item(params.id),
    queryFn: () => getItem({ itemId: params.id }),
  });

  return (
    <>
      <Header />

      <div className="flex flex-col items-center px-5 pt-7">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<div>server render</div>}>
            <ItemDetail itemId={params.id} />
          </Suspense>
        </HydrationBoundary>
      </div>
    </>
  );
};

export default Page;
