import StartLink from './_components/main-temp/StartLink';
import Banner from './_assets/svgs/banner.svg';
import ServiceIntro from './_components/main-temp/ServiceIntro';

import Header from './_components/Header/Header';
import AuthTest from './_components/main-temp/AuthTest';

export default async function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center px-5 pt-4">
        <div className="relative flex h-44 w-full justify-center">
          <Banner fill="true" />
        </div>

        <StartLink />
        <ServiceIntro />

        <div className="flex flex-col border border-sky-400 p-2">
          <AuthTest />
        </div>
      </div>
    </>
  );
}
