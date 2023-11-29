import Header from '@/app/_components/Header/Header';
import { getItem, itemKeys } from '@/app/_hooks/query/item';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import ItemEdit from './_components/ItemEdit';
import { Suspense } from 'react';
import StoreFooter from '@/app/_components/Footer/StoreFooter';
import Spinner from '@/app/_components/spinner/Spinner';

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

      <div className="px-5 pb-20 pt-7">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<Spinner />}>
            <ItemEdit itemId={itemId} />
          </Suspense>
        </HydrationBoundary>
      </div>

      <StoreFooter />
    </>
  );
};

export default ItemDetailEdit;
