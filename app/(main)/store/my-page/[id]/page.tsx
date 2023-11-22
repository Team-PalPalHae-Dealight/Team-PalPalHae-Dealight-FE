import Footer from '@/app/_components/Footer/Footer';
import Header from '@/app/_components/Header/Header';
import MyPageForm from './_components/my-page-form/MyPageForm';

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);

  return (
    <>
      <Header />
      <MyPageForm />
      <Footer />
    </>
  );
}
