'use client';

import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';
import Notification from '@/app/_components/notification/Notification';
import { useDeleteItem, useGetItem } from '@/app/_hooks/query/item';
import { useState } from 'react';
import PopUp from '@/app/_components/pop-up/PopUp';

type ItemDetailType = {
  itemId: string;
};

const ItemDetail = ({ itemId }: ItemDetailType) => {
  const { data: item } = useGetItem({ itemId });

  const { mutate: deleteItem } = useDeleteItem();
  const { discountPrice, originalPrice, stock, itemName, image, description } =
    item;
  const rounter = useRouter();

  const [deletePopUp, setDeletePopUp] = useState(false);

  return (
    <div className="w-full">
      <div className="mb-5 flex w-full gap-5">
        <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded">
          <Image
            src={String(image)}
            alt="상품 이미지"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="mt-3 flex min-w-0 grow flex-col gap-4">
          <span className="truncate text-xl font-bold">{itemName}</span>

          <div className="text-lg font-bold">
            <span className="mr-5">재고:</span>
            <span className=" text-red">{stock}개</span>
          </div>
        </div>
      </div>

      <div className="mb-3 flex flex-col gap-5">
        <div className="rounded bg-white p-4">
          <h3 className="mb-2.5 text-lg font-bold">상품 설명</h3>

          <div className="mb-3 text-sm font-bold">
            할인 가격 : {discountPrice}원
          </div>
          <div className="mb-2.5 text-xs text-dark-gray">
            원가 : {originalPrice}원
          </div>

          <p className="text-xs">{description}</p>
        </div>

        <Notification>
          딜라잇 서비스를 사용하기에 앞서 딜라잇(Dealight)은 소상공인과 고객
          간의 예약 시스템을 통해 연결 창구 역할을 수행합니다.
        </Notification>
      </div>

      <div className="flex w-full gap-5">
        <PrimaryButton
          onClick={() => {
            rounter.push(pageRoute.store.itemEdit(itemId), { scroll: false });
          }}
        >
          수정하기
        </PrimaryButton>
        <PrimaryButton onClick={() => setDeletePopUp(true)}>
          삭제하기
        </PrimaryButton>
        {deletePopUp && (
          <PopUp
            mainText="상품을 삭제하시겠습니까?"
            leftBtnText="예"
            rightBtnText="아니오"
            leftBtnClick={() => {
              deleteItem(
                { itemId },
                {
                  onSuccess: () => {
                    rounter.push(pageRoute.store.home(), { scroll: false });
                  },
                }
              );
            }}
            rightBtnClick={() => setDeletePopUp(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
