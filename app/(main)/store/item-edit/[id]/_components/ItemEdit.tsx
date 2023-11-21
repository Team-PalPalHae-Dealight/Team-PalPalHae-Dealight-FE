'use client';

import { useGetItem, usePatchItem } from '@/app/_hooks/query/item';
import Image from 'next/image';
import MockDonut from '@/app/_assets/images/mock-donut.png';
import Notification from '@/app/_assets/images/notification.png';

import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';

type ItemEditPropsType = {
  itemId: string;
};

const ItemEdit = ({ itemId }: ItemEditPropsType) => {
  const { data: item, isLoading } = useGetItem({ itemId });

  const { mutate: patchItem } = usePatchItem();

  const onClickEdit = () => {
    patchItem({ itemId });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <h2 className="mb-3 text-lg font-bold">상품 등록</h2>

      <div className="mb-5 flex gap-4">
        <div className="flex flex-col gap-1.5">
          <Image src={MockDonut} alt="mock docut" />
          <PrimaryButton
            onClick={() => {}}
            className="h-7 px-4 text-sm font-bold"
          >
            이미지 불러오기
          </PrimaryButton>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <input
              className="rounded py-3.5 pl-3"
              placeholder={item?.itemName}
            />

            <input
              className="rounded py-3.5 pl-3"
              placeholder={String(item?.stock ?? 0)}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-bold">상품 설명</h2>

        <div className="mb-3 flex gap-1">
          <Image
            src={Notification}
            alt="notification"
            className="flex h-[13px] w-[13px] flex-shrink-0"
          />
          <p className="flex-shrink text-xs text-dark-gray">
            판매 가격에 상품 원가를, 할인 가격에 할인된 가격을 작성하시면,
            <br />
            할인 가격으로 상품이 등록됩니다.
          </p>
        </div>

        <div className="mb-3 flex flex-col gap-2.5">
          <div className="flex flex-col">
            <label htmlFor="originalPrice" className="text-xs font-semibold">
              판매 가격
            </label>
            <input
              type="text"
              id="originalPrice"
              placeholder={String(item?.originalPrice ?? 0)}
              className="rounded py-3.5 pl-3"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="originalPrice" className="text-xs font-semibold">
              할인 가격
            </label>
            <input
              type="text"
              id="originalPrice"
              placeholder={String(item?.originalPrice ?? 0)}
              className="rounded py-3.5 pl-3"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="originalPrice" className="text-xs font-semibold">
              상품 설명
            </label>
            <input
              type="text"
              id="originalPrice"
              placeholder="(선택 사항) 추가적인 상품 설명을 작성해주세요."
              className="rounded py-9 pl-3"
            />
          </div>
        </div>

        <PrimaryButton onClick={() => onClickEdit()}>수정하기</PrimaryButton>
      </div>
    </div>
  );
};

export default ItemEdit;
