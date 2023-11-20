'use client';
import GuideText from './Components/GuildeText/GuideText';
import Header from '@/app/_components/Header/Header';
import Signup from './Components/Signup/Signup';

export default function Page() {
  return (
    <>
      <main className=" flex flex-col items-center px-5 font-semibold">
        <Header />
        <GuideText />
        <Signup />
      </main>
    </>
  );
}