import StoreFooter from '@/app/_components/Footer/StoreFooter';
import Header from '@/app/_components/Header/Header';

import dynamic from 'next/dynamic';

const StoreManage = dynamic(() => import('./_components/StoreManage'), {
  loading: () => <div>client loading</div>,
  ssr: false,
});

export default async function Page() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center gap-5 px-5 pt-7">
        <StoreManage />
      </div>

      <StoreFooter />
    </>
  );
}
