import Header from '@/app/_components/Header/Header';
import MyPageForm from './_components/my-page-form/MyPageForm';
import StoreFooter from '@/app/_components/Footer/StoreFooter';

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);

  return (
    <>
      <Header />
      <MyPageForm />
      <StoreFooter />
    </>
  );
}
