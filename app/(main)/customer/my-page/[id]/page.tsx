import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import MyPageContents from './_components/MyPageContents/MyPageContents';
import Footer from '@/app/_components/Footer/Footer';

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <div className="flex flex-col items-center pt-2.5">
      <CustomerHeader />
      <div className="w-full px-5">
        <MyPageContents />
      </div>
      <Footer />
    </div>
  );
}
