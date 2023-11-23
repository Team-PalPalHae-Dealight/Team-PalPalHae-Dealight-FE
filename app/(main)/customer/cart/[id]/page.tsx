import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';
import MainContents from './_components/main-contents/MainContents';

export default function Page() {
  return (
    <>
      <CustomerHeader />
      <MainContents />
      <CustomerFooter />
    </>
  );
}
