import Header from '@/app/_components/Header/Header';
import StoreFooter from '@/app/_components/Footer/StoreFooter';
import dynamic from 'next/dynamic';

const MainContents = dynamic(
  () => import('./_components/main-contents/MainContents'),
  { loading: () => <>client loading...</>, ssr: false }
);

export default function Page() {
  return (
    <>
      <Header />

      <div className="mt-2 flex h-[76vh] flex-col items-center px-5">
        <MainContents />
      </div>

      <StoreFooter />
    </>
  );
}
