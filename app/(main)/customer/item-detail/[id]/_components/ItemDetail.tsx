'use client';

import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';
import { useGetItem } from '@/app/_hooks/query/item';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

type ItemDetailType = {
  itemId: string;
};

const ItemDetail = ({ itemId }: ItemDetailType) => {
  const router = useRouter();
  const { nickName } = useUserInfo();

  const { data: item } = useGetItem({ itemId });

  const {
    discountPrice,
    originalPrice,
    stock,
    itemName,
    image,
    description,
    storeAddress,
    storeName,
  } = item;

  return (
    <>
      <div className="flex w-full flex-col justify-center gap-5">
        <div className="relative h-32 w-full flex-none overflow-hidden rounded">
          <Image
            src={String(image)}
            alt="상품 이미지"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="contain"
          />
        </div>

        <div className="flex w-full min-w-0 grow flex-col items-center gap-3 rounded bg-white pb-4">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold">
            {itemName}
          </span>

          <div className="flex items-center gap-3">
            <div className="text-lg font-semibold">재고:</div>
            <div className="font-semibold tracking-widest text-red">
              {stock}개
            </div>
          </div>

          <PrimaryButton
            onClick={() =>
              router.push(
                pageRoute.customer.storeDetail(String(item.storeId)),
                { scroll: false }
              )
            }
            className="h-7"
          >
            업체 정보
          </PrimaryButton>
        </div>
      </div>

      <div className="min-h-42.5 w-full rounded bg-white p-4">
        <h2 className="pb-4 text-lg font-semibold">상품 설명</h2>

        <div className="pb-3 font-semibold">할인 가격 : {discountPrice}원</div>
        <div className="pb-2.5 text-xs font-semibold text-dark-gray">
          원가 : {originalPrice}원
        </div>

        <p className="text-xs">{description}</p>
      </div>

      <div className="min-h-42.5 w-full rounded bg-white p-4">
        <h2 className="pb-2.5 text-lg font-semibold">업체 위치</h2>
        <KakaoMap
          currentPosition={{
            lng: storeAddress.xCoordinate,
            lat: storeAddress.yCoordinate,
            title: '',
          }}
        />
      </div>

      <div className="min-h-42.5 w-full rounded bg-white p-4">
        <h2 className="pb-4 text-lg font-semibold">주문서</h2>

        <div className="flex gap-10">
          <div className="flex gap-1">
            <div className="font-semibold">가게명 :</div>
            <span className="text-dark-gray">{storeName}</span>
          </div>

          <div className="flex gap-1">
            <div className="font-semibold">수량 :</div>
            <span className="font-semibold">1</span>
          </div>
        </div>

        <div className="flex w-full gap-1">
          <div className="min-w-fit font-semibold">상품명 :</div>
          <span className="overflow-hidden text-ellipsis text-dark-gray">
            {itemName}
          </span>
        </div>

        <div className="flex gap-1">
          <div className="font-semibold">주문자 :</div>
          <span className="text-dark-gray">{nickName ?? '딜라잇'}</span>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
