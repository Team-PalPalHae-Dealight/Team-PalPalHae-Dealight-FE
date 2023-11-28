import Header from '@/app/_components/Header/Header';
import StoreFooter from '@/app/_components/Footer/StoreFooter';
import dynamic from 'next/dynamic';

const MyPageForm = dynamic(
  () => import('./_components/my-page-form/MyPageForm'),
  { loading: () => <>client loading...</>, ssr: false }
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
