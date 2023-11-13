'use client';

import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import MockDonut from '@/app/_assets/images/mock-donut.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';

const ItemDetail = () => {
  const rounter = useRouter();

  return (
    <div className="mb-5 w-full">
      <div className="mb-5 flex gap-5">
        <div className="relative h-24 w-32">
          <Image src={MockDonut} alt="mock donut" fill />
        </div>

        <div className="mt-3 flex flex-col gap-4">
          <h2 className="text-xl font-bold">{'달콤한 도너츠'}</h2>

          <div className="text-lg font-bold">
            <span className="mr-5">재고:</span>
            <span className=" text-red">{3}개</span>
          </div>
        </div>
      </div>

      <div className="mb-3 flex flex-col gap-5">
        <div className="bg-white p-4">
          <h3 className="mb-2.5 text-lg font-bold">상품 설명</h3>

          <div className="mb-3 text-sm font-bold">할인 가격 : {1500}원</div>
          <div className="mb-2.5 text-xs text-dark-gray">원가 : {3000}원</div>

          <p className="text-xs font-bold">
            {
              '달콤한 도너츠는 도너츠 가게 시그니처 메뉴입니다.가장 인기가 많은 제품으로, 초콜릿 시럽과 캔디로 토핑이 이루어져 있습니다. 냉장 보관 필수이며, 3일 내로 섭취해주세요.'
            }
          </p>
        </div>

        <div className="bg-white p-4">
          <h3 className="mb-2.5 text-lg font-bold">안내 사항</h3>

          <div className="flex flex-col gap-2 text-xs font-bold">
            <p>딜라잇(Dealight) 서비스를 이용해주셔서 감사합니다.</p>
            <p>
              딜라잇 서비스를 사용하기에 앞서 딜라잇(Dealight)은 소상공인과 고객
              간의 예약 시스템을 통해 연결 창구 역할을 수행합니다.
            </p>
            <p>
              딜라잇(Dealight)은 상품 거래 예약을 도와주며,
              <br />그 외 과정에서 문제가 발생할 경우 책임을 지지 않습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-5">
        <PrimaryButton
          onClick={() => {
            rounter.push(pageRoute.store.editItem('1'));
          }}
        >
          수정하기
        </PrimaryButton>
        <PrimaryButton
          onClick={() => {
            if (confirm('상품을 삭제하시겠습니까?')) {
              rounter.push('/');
            }
          }}
        >
          삭제하기
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ItemDetail;
