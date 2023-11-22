'use client';
import GuideText from './_components/GuildeText/GuideText';
import Header from '@/app/_components/Header/Header';
import Signup from './_components/Signup/Signup';

export default function Page() {
  return (
    <>
      <Header />
      <main className=" flex flex-col items-center px-5 font-semibold">
        <GuideText />
        <Signup />
      </main>
    </>
  );
}
