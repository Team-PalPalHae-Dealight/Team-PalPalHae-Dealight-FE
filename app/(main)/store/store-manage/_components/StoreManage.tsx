'use client';

import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import ItemCards from './ItemCards';
import Image from 'next/image';
import { formatPhoneNumber } from '@/app/_utils/number';
import { useGetMyStoreReviews } from '@/app/_hooks/query/review';
import { useGetMyStore } from '@/app/_hooks/query/store';
import { useGetMyStoreItems } from '@/app/_hooks/query/item';
import DelightEmoji from '@/app/_assets/svgs/dealight-emoji.svg';

const StoreManage = () => {
  const { data: myStore } = useGetMyStore();
  const { data: myStoreReview } = useGetMyStoreReviews();
  const { data: storeItems, ref } = useGetMyStoreItems({ size: 5 });

  const {
    closeTime,
    dayOff,
    name,
    openTime,
    telephone,
    image,
    xCoordinate,
    yCoordinate,
  } = myStore;
  const dayOffText = dayOff.join(' ');

  return (
    <>
      <div className="w-full">
        <h2 className="mb-4 text-xl font-semibold">{name}</h2>
        <div className="relative h-44 overflow-hidden rounded">
          {image && (
            <Image
              priority
              fill
              alt={name}
              src={image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="contain"
            />
          )}
        </div>
        {!image && (
          <div className="flex h-44 items-center justify-center rounded bg-white text-dark-gray">
            등록된 이미지가 없습니다
          </div>
        )}
      </div>

      <div className="min-h-42.5 w-full rounded bg-white p-4">
        <h2 className="pb-2.5 text-lg font-semibold">업체 위치</h2>
        <KakaoMap
          currentPosition={{
            lng: xCoordinate,
            lat: yCoordinate,
            title: '',
          }}
        />
      </div>

      <div className="min-h-42.5 w-full rounded bg-white p-4">
        <h2 className="pb-2.5 text-lg font-semibold">업체 정보</h2>
        <div className="flex flex-col gap-1.5 text-sm font-semibold">
          <div>영업 시간 : {`${openTime} ~ ${closeTime}`}</div>
          <div>휴무일 : {dayOffText}</div>
          <div>연락처 : {formatPhoneNumber(telephone)}</div>
        </div>
      </div>

      <div className="flex  w-full flex-col gap-2.5 ">
        <h2 className="text-lg font-semibold">상품 목록</h2>
        <div className="h-96 overflow-auto">
          <ItemCards items={storeItems} />

          <div ref={ref} className="h-4" />

          {storeItems.length === 0 && (
            <span className="flex items-center justify-center text-xs text-dark-gray">
              등록한 상품이 없습니다.
            </span>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col">
        <h2 className="mb-5 text-lg font-semibold">응원의 메시지</h2>

        <div className="flex flex-col gap-2.5">
          {myStoreReview.reviews.map(review => (
            <div
              key={review.content}
              className="flex items-center rounded bg-white p-3 text-xs font-semibold shadow"
            >
              <div className="mr-auto flex gap-2.5">
                <DelightEmoji />

                <span>&quot;{review.content}&quot;</span>
              </div>
              <span className="text-blue">{review.count}</span>
            </div>
          ))}

          {myStoreReview.reviews.length === 0 && (
            <span className="text-center text-xs text-dark-gray">
              등록된 응원의 메시지가 없습니다.
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreManage;
