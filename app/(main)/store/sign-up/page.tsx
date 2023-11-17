'use client';
import GuideText from './components/GuildeText/GuildeText';
import Header from '@/app/_components/Header/Header';
import Signup from './components/Signup/Signup';

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
