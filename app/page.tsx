import Banner from './_assets/images/banner.png';
import Header from './_components/Header/Header';
import Image from 'next/image';
import StartLink from './_components/main/StartLink';
import ServiceIntro from './_components/main/ServiceIntro';
//import AuthTest from './_components/main/AuthTest';

export default async function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center px-5 pt-4">
        <Image src={Banner} alt="배너" priority />

        <StartLink />
        <ServiceIntro />

        {/* <div className="flex flex-col border border-sky-400 p-2">
          <AuthTest />
        </div> */}
      </div>
    </>
  );
}
