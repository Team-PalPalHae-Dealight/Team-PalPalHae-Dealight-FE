import DealightIntro1 from '@/app/_assets/svgs/intro-1.svg';
import DealightIntro2 from '@/app/_assets/svgs/intro-2.svg';
import DealightIntro3 from '@/app/_assets/svgs/intro-3.svg';

const ServiceIntro = () => {
  return (
    <section className="mt-4 flex w-full flex-col gap-3 rounded-lg bg-white p-4 shadow">
      <h1 className="text-lg font-semibold">서비스 소개</h1>

      <article className="flex flex-col gap-2 rounded-lg bg-gray p-5 ">
        <h2 className="flex gap-1 text-sm font-semibold">
          <div className="flex flex-row items-center justify-start">
            <DealightIntro1 />
            <span className="text-sm font-semibold">교류의 장 딜라잇</span>
          </div>
        </h2>

        <p className="text-xs">
          소상공인들의 당일 폐기 예정 식품의 할인 정보 공유 및 예약
          서비스입니다.
        </p>
      </article>
      <article className="flex flex-col gap-2 rounded-lg bg-gray p-5 ">
        <h2 className="flex gap-1">
          <DealightIntro2 />
          <span className="text-sm font-semibold">환경 친화적인 딜라잇</span>
        </h2>

        <p className="text-xs">
          당일 폐기 예정 상품을 구매/판매함으로써
          <br />
          환경에 대한 부담을 감소시킵니다.
        </p>
      </article>
      <article className="flex flex-col gap-2 rounded-lg bg-gray p-5 ">
        <h2 className="flex gap-1">
          <DealightIntro3 />
          <span className="text-sm font-semibold">가격 친화적인 딜라잇</span>
        </h2>

        <p className="text-xs">
          일반적인 가격보다 저렴하게 필요한 상품을 구입할 수 있습니다.
        </p>
      </article>
    </section>
  );
};

export default ServiceIntro;
