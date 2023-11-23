import Header from '@/app/_components/Header/Header';
import StoreFooter from '@/app/_components/Footer/StoreFooter';
import MainContents from './_components/main-contents/MainContents';

export default function Page() {
  return (
    <>
      <Header />
      <MainContents />
      <StoreFooter />
    </>
  );
}
