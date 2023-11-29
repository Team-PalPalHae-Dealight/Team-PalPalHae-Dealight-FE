import Header from '@/app/_components/Header/Header';
import StoreFooter from '@/app/_components/Footer/StoreFooter';
import dynamic from 'next/dynamic';
import Spinner from '@/app/_components/spinner/Spinner';

const MainContents = dynamic(
  () => import('./_components/main-contents/MainContents'),
  { loading: () => <Spinner />, ssr: false }
);

export default function Page() {
  return (
    <>
      <Header />

      <div className="mt-2 flex flex-col items-center px-5">
        <MainContents />
      </div>

      <StoreFooter />
    </>
  );
}
