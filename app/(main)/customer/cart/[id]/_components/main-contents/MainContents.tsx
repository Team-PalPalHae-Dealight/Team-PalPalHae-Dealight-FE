'use client';

import dynamic from 'next/dynamic';
import ResetButton from '../reset-button/ResetButton';
import Spinner from '@/app/_components/spinner/Spinner';

const CartContent = dynamic(() => import('../cart-contents/CartContents'), {
  loading: () => (
    <div className="flex h-60 items-center justify-center">
      <Spinner />
    </div>
  ),
  ssr: false,
});

const MainContents = () => {
  return (
    <div className="flex w-full flex-col items-center px-5">
      <div className="flex w-full items-end justify-between pb-4 pt-5">
        <div className="text-xl font-semibold">장바구니</div>
        <ResetButton />
      </div>
      <CartContent />
    </div>
  );
};

export default MainContents;
