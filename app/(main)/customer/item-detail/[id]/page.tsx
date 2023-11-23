import Notification from '@/app/_components/notification/Notification';
import dynamic from 'next/dynamic';
import BottomButtons from './_components/BottomButtons';
import Footer from '@/app/_components/Footer/Footer';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';

const ItemDetail = dynamic(() => import('./_components/ItemDetail'), {
  ssr: false,
});

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <CustomerHeader />
      <div className="flex flex-col items-center gap-5 px-5 pt-7">
        <ItemDetail itemId={params.id} />

        <Notification>
          상품은 해당 페이지에서 주문 수량은 1개로 제한됩니다. 추가 주문을
          원하실 경우 장바구니 페이지에서 수량을 선택할 수 있습니다.
        </Notification>
        <BottomButtons itemId={params.id} />
      </div>
      <Footer />
    </>
  );
}
