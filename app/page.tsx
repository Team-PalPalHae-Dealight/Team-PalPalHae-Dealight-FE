import StartLink from './_components/main-temp/_components/StartLink';
import Banner from './_assets/images/banner.png';
import Image from 'next/image';
import ServiceIntro from './_components/main-temp/_components/ServiceIntro';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <Image src={Banner} priority alt="banner" />
      <StartLink />
      <ServiceIntro />
    </main>
  );
}
