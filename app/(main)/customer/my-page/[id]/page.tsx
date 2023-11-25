import CustomerHeader from '@/app/_components/Header/CustomerHeader';
import MyPageContents from './_components/MyPageContents/MyPageContents';
import CustomerFooter from '@/app/_components/Footer/CustomerFooter';

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <CustomerHeader />
      <div className="w-full px-5">
        <MyPageContents />
      </div>
      <CustomerFooter />
    </div>
  );
}
