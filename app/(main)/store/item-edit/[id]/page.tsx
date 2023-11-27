import Header from '@/app/_components/Header/Header';
import { getItem, itemKeys } from '@/app/_hooks/query/item';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import ItemEdit from './_components/ItemEdit';
import { Suspense } from 'react';

const ItemDetailEdit = async ({ params }: { params: { id: string } }) => {
  const { id: itemId } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: itemKeys.item(itemId),
    queryFn: () => getItem({ itemId }),
  });

  return (
    <>
      <Header />

      <div className="px-5 pt-7">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<div>server render</div>}>
            <ItemEdit itemId={itemId} />
          </Suspense>
        </HydrationBoundary>
      </div>
    </>
  );
};

export default ItemDetailEdit;
