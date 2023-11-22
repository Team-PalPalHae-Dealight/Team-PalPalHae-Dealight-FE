'use client';

import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import ImageUpload from '@/app/_assets/images/image-upload.png';
import Notification from '@/app/_assets/images/notification.png';
import Image, { StaticImageData } from 'next/image';
import { useCreateItem } from '@/app/_hooks/query/item';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';

const ItemRegister = () => {
  const { mutate: createItem } = useCreateItem();

  const router = useRouter();

  const [file, setFile] = useState<File>();
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState<number>(0);
  const [discountPrice, setDiscountPrice] = useState<number>(0);
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [description, setDescription] = useState('');
  const [previewImage, setPreviewImage] = useState<StaticImageData | string>(
    ImageUpload
  );

  return (
    <div className="flex flex-col">
      <h2 className="mb-3 text-lg font-bold">상품 등록</h2>

      <div className="mb-5 flex gap-4">
        <div className="flex flex-col items-center justify-around gap-1.5">
          <div className="relative h-20 w-20">
            <Image
              src={previewImage}
              fill
              sizes="(max-width: 768px) 100vw"
              alt="미리보기 이미지"
            />
          </div>

          <PrimaryButton
            onClick={() => {}}
            className="h-7 px-4 text-sm font-bold"
          >
            이미지 불러오기
          </PrimaryButton>

          <input
            className="w-32"
            type="file"
            accept="image/*"
            onChange={e => {
              if (!e.target.files || e.target.files.length === 0) return;

              const file = e.target.files[0];

              setFile(file);
              const reader = new FileReader();

              reader.readAsDataURL(file);
              reader.onload = e => {
                if (!reader.result || !e.target) return;
                if (typeof e.target.result !== 'string') return;

                setPreviewImage(reader.result as string);
              };
            }}
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <input
            className="rounded py-3.5 pl-3"
            placeholder="상품명"
            value={itemName}
            onChange={e => setItemName(e.currentTarget.value)}
          />

          <input
            className="rounded py-3.5 pl-3"
            placeholder="0"
            value={stock}
            onChange={e => setStock(Number(e.currentTarget.value))}
          />
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
              placeholder="0"
              className="rounded py-3.5 pl-3"
              value={originalPrice}
              onChange={e => setOriginalPrice(Number(e.currentTarget.value))}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="originalPrice" className="text-xs font-semibold">
              할인 가격
            </label>
            <input
              type="text"
              id="originalPrice"
              placeholder="0"
              className="rounded py-3.5 pl-3"
              value={discountPrice}
              onChange={e => setDiscountPrice(Number(e.currentTarget.value))}
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
              value={description}
              onChange={e => setDescription(e.currentTarget.value)}
            />
          </div>
        </div>

        <PrimaryButton
          onClick={() => {
            createItem(
              {
                item: {
                  itemName,
                  stock,
                  discountPrice,
                  originalPrice,
                  description,
                  image: file!,
                },
              },
              {
                onSuccess: data => {
                  const { itemId } = data;
                  router.push(pageRoute.store.itemDetail(String(itemId)));
                },
              }
            );
          }}
        >
          등록하기
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ItemRegister;
