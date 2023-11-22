'use client';

import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import Notification from '@/app/_components/notification/Notification';
import Image from 'next/image';
import Donut from '@/app/_assets/images/mock-donut.png';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  const router = useRouter();

  return (
    <main className="mt-2 flex flex-col items-center gap-5 px-5">
      <div className="flex gap-5">
        <Image src={Donut} alt="donut" />

        <div className="flex flex-col gap-3">
          <span className="text-xl font-semibold">{'달콤한 도너츠'}</span>
          <div className="flex gap-3">
            <div>재고:</div>
            <div className="font-semibold tracking-widest text-red">{3}개</div>
          </div>
          <PrimaryButton
            onClick={() => router.push(pageRoute.customer.storeDetail('1'))}
          >
            업체 정보
          </PrimaryButton>
        </div>
      </div>

      <div className="min-h-42.5 w-full rounded bg-white p-4">
        <h2 className="pb-4 text-lg font-semibold">상품 설명</h2>

        <div className="pb-3 font-semibold">할인 가격 : {1500}원</div>
        <div className="pb-2.5 text-xs font-semibold text-dark-gray">
          원가 : {3000}원
        </div>

        <p className="text-xs">
          달콤한 도너츠는 도너츠 가게 시그니처 메뉴입니다. 가장 인기가 많은
          제품으로, 초콜릿 시럽과 캔디로 토핑이 이루어져 있습니다. 냉장 보관
          필수이며, 3일 내로 섭취해주세요.
        </p>
      </div>

      <div className="min-h-42.5 w-full rounded bg-white p-4">
        <h2 className="pb-2.5 text-lg font-bold">업체 위치</h2>
        <KakaoMap />
      </div>

      <div className="min-h-42.5 w-full rounded bg-white p-4">
        <h2 className="pb-4 text-lg font-bold">주문서</h2>
        <div className="flex gap-10">
          <div className="flex gap-1">
            <div className="font-semibold">가게명 :</div>
            <span className="text-dark-gray">행복도너츠가게</span>
          </div>

          <div className="flex gap-1">
            <div className="font-semibold">수량 :</div>
            <span className="font-semibold">1</span>
          </div>
        </div>

        <div className="flex gap-1">
          <div className="font-semibold">상품명 :</div>
          <span className="text-dark-gray">달콤한 도너츠</span>
        </div>

        <div className="flex gap-1">
          <div className="font-semibold">주문자 :</div>
          <span className="text-dark-gray">에프와 오프</span>
        </div>
      </div>

      <Notification>
        상품은 해당 페이지에서 주문 수량은 1개로 제한됩니다. 추가 주문을 원하실
        경우 장바구니 페이지에서 수량을 선택할 수 있습니다.
      </Notification>
    </main>
  );
}
