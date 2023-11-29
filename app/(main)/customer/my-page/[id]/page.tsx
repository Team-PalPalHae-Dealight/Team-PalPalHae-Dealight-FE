import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import dynamic from 'next/dynamic';
import Spinner from '@/app/_components/spinner/Spinner';

const MyPageContents = dynamic(
  () => import('./_components/MyPageContents/MyPageContents'),
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
    <div className="flex flex-col items-center">
      <CustomerHeader />
      <div className="w-full px-5">
        <MyPageContents />
      </div>
      <CustomerFooter />
    </div>
  );
};

export default Page;
