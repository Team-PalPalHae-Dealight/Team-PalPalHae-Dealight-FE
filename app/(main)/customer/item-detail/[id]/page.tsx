import Notification from '@/app/_components/notification/Notification';
import BottomButtons from './_components/BottomButtons';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import ItemDetail from './_components/ItemDetail';
import { Suspense } from 'react';
import { getItem, itemKeys } from '@/app/_hooks/query/item';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import Spinner from '@/app/_components/spinner/Spinner';

export default async function Page({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: itemKeys.item(params.id),
    queryFn: () => getItem({ itemId: params.id }),
  });

  return (
    <>
      <CustomerHeader />
      <div className="flex flex-col items-center gap-5 px-5 pb-20 pt-7">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<Spinner />}>
            <ItemDetail itemId={params.id} />
          </Suspense>
        </HydrationBoundary>

        <Notification>
          상품은 해당 페이지에서 주문 수량은 1개로 제한됩니다. 추가 주문을
          원하실 경우 장바구니 페이지에서 수량을 선택할 수 있습니다.
        </Notification>
        <BottomButtons itemId={params.id} />
      </div>
      <CustomerFooter />
    </>
  );
}
