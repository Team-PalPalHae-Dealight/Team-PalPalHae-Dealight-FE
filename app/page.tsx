import StartLink from './_components/main-temp/_components/StartLink';
import Banner from './_assets/images/banner.png';
import DealightIntro1 from './_assets/images/dealight-intro-1.png';
import DealightIntro2 from './_assets/images/dealight-intro-2.png';
import DealightIntro3 from './_assets/images/dealight-intro-3.png';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <Image src={Banner} priority alt="banner" />
      <StartLink />
      <section className="mt-4 flex flex-col gap-3 rounded-lg bg-white p-4 shadow">
        <h1 className="text-lg font-semibold">서비스 소개</h1>

        <article className="flex flex-col gap-2 rounded-lg bg-gray p-5 ">
          <h2 className="flex gap-1 text-sm font-semibold">
            <Image
              src={DealightIntro1}
              alt="dealight intro 1"
              className="h-auto w-auto"
            />
            <span className="text-sm font-semibold">
              딜라잇(Dealight) 이란?
            </span>
          </h2>

          <p className="text-xs">
            거래(Deal) + 즐거움/기쁨(Light)의 합성어로,
            <br />
            소상공인들의 당일 폐기 예정 식품의 할인 정보 공유 및 예약
            서비스입니다.
          </p>
        </article>
        <article className="flex flex-col gap-2 rounded-lg bg-gray p-5 ">
          <h2 className="flex gap-1">
            <Image
              src={DealightIntro2}
              alt="dealight intro 2"
              className="h-auto w-auto"
            />
            <span className="text-sm font-semibold">
              환경 친화적인 딜라잇(Dealight)
            </span>
          </h2>

          <p className="text-xs">
            당일 폐기 예정 상품을 구매/판매함으로써
            <br />
            식재료 낭비를 줄이고 음식물 처리 비용을 절약하여 환경에 대한 부담을
            감소시킵니다.
          </p>
        </article>
        <article className="flex flex-col gap-2 rounded-lg bg-gray p-5 ">
          <h2 className="flex gap-1">
            <Image
              src={DealightIntro3}
              alt="dealight intro 3"
              className="h-auto w-auto"
            />
            <span className="text-sm font-semibold">
              가격 친화적인 딜라잇(Dealight)
            </span>
          </h2>

          <p className="text-xs">
            소비자 입장에서 할인된 가격으로 판매되는 제품을
            <br />
            구매함으로써, 일반적인 가격보다 저렴하게 필요한 식재료나 음식을
            구입할 수 있습니다.
          </p>
        </article>
      </section>
    </main>
  );
}
