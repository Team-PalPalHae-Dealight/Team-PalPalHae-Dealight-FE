import Header from '@/app/_components/Header/Header';
import StoreFooter from '@/app/_components/Footer/StoreFooter';
import dynamic from 'next/dynamic';
import Spinner from '@/app/_components/spinner/Spinner';

const MyPageForm = dynamic(
  () => import('./_components/my-page-form/MyPageForm'),
  {
    loading: () => (
      <div className="flex h-60 items-center justify-center">
        <Spinner />
      </div>
    ),
    ssr: false,
  }
);

const Page = async () => {
  return (
    <>
      <Header />

      <div className="w-full px-5">
        <MyPageForm />
      </div>

      <StoreFooter />
    </>
  );
};
export default Page;
