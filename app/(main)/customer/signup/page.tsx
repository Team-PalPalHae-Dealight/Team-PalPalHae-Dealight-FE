'use client';
import GuideText from './_components/guide-text/GuideText';
import Header from '@/app/_components/Header/Header';
import Signup from './_components/sign-up/SignUp';

export default function Page() {
  return (
    <>
      <Header />
      <div className=" flex flex-col items-center px-5 font-semibold">
        <GuideText />
        <Signup />
      </div>
    </>
  );
}
