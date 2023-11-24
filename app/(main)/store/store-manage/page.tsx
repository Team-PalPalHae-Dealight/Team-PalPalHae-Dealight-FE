import StoreFooter from '@/app/_components/Footer/StoreFooter';
import Header from '@/app/_components/Header/Header';
import StoreManage from './_components/StoreManage';

export default function Page() {
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
