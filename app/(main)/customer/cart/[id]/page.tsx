import CartContent from './_components/cart-contents/CartContents';
import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import ResetButton from './_components/reset-button/ResetButton';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col items-center">
      <CustomerHeader />
      <div className="w-full px-5">
        <div className="flex w-full items-end justify-between pb-4 pt-5">
          <div className="text-xl font-semibold">장바구니</div>
          <ResetButton />
        </div>
        <CartContent params={params} />
      </div>
      <CustomerFooter />
    </main>
  );
}
