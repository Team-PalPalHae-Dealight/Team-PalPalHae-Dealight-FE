'use client';

import { useGetItem, usePatchItem } from '@/app/_hooks/query/item';
import Image from 'next/image';
import Notification from '@/app/_assets/images/notification.png';

import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import pageRoute from '@/app/_constants/path';
import { useRouter } from 'next/navigation';
import ErrorMessage from '@/app/_components/erorr-message/ErrorMessage';
import EditLoading from './EditLoading';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';

type ItemEditPropsType = {
  itemId: string;
};

type ItemEditInputs = {
  image: File | string;
  itemName: string;
  stock: number;
  discountPrice: number;
  originalPrice: number;
  description: string;
};

const ItemEdit = ({ itemId }: ItemEditPropsType) => {
  const { data: item } = useGetItem({ itemId });

  const { mutate: patchItem, isPending } = usePatchItem();

  const router = useRouter();

  const { discountPrice, originalPrice, stock, itemName, image, description } =
    item;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ItemEditInputs>({
    defaultValues: {
      itemName,
      stock,
      description,
      discountPrice,
      originalPrice,
      image,
    },
  });

  const [previewImage, setPreviewImage] = useState<string>(String(image));
  const [errorPopUp, setErrorPopUp] = useState('');

  const onChangeImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const reader = new FileReader();
    setValue('image', file);

    reader.readAsDataURL(file);
    reader.onload = e => {
      if (!reader.result || !e.target) return;
      if (typeof e.target.result !== 'string') return;

      setPreviewImage(reader.result as string);
    };
  };

  const onSubmit: SubmitHandler<ItemEditInputs> = editItem => {
    patchItem(
      { item: editItem, itemId },
      {
        onSuccess: data => {
          router.push(pageRoute.store.itemDetail(String(data.itemId)), {
            scroll: false,
          });
        },
        onError: err => {
          setErrorPopUp(err.message);
        },
      }
    );
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-3 text-lg font-bold">상품 등록</h2>

        <div className="mb-5 flex gap-4">
          <div className="flex flex-shrink-0 flex-col items-center justify-around gap-1.5">
            <div className="relative h-20 w-20 overflow-hidden rounded">
              <Image
                src={previewImage}
                fill
                sizes="(max-width: 768px) 100vw"
                alt="미리보기 이미지"
              />
            </div>

            <label
              htmlFor="imagePreview"
              className="flex h-7  cursor-pointer items-center justify-center rounded-md bg-yellow px-4 text-sm font-bold"
            >
              이미지 불러오기
            </label>

            <input
              id="imagePreview"
              {...register('image')}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={onChangeImagePreview}
            />
          </div>

          <div className="flex w-full flex-col gap-3">
            <input
              {...register('itemName', { required: '값을 입력해주세요.' })}
              className="rounded border border-transparent py-3.5 pl-3 focus:border-yellow"
              placeholder="상품명"
            />

            <ErrorMessage>{errors.itemName?.message}</ErrorMessage>

            <input
              {...register('stock', {
                required: '값을 입력해주세요.',
                validate: {
                  validateNumber: value =>
                    !isNaN(Number(value)) || '숫자로 입력해주세요.',
                },
              })}
              className="rounded border border-transparent py-3.5 pl-3 focus:border-yellow"
              placeholder="재고"
            />

            <ErrorMessage>{errors.stock?.message}</ErrorMessage>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold">상품 설명</h2>

          <div className="mb-3 flex gap-1">
            <Image
              src={Notification}
              alt="notification"
              className="mt-1 flex h-[13px] w-[13px] flex-shrink-0"
            />
            <p className="flex-shrink text-xs text-dark-gray">
              판매 가격에 상품 원가를, 할인 가격에 할인된 가격을 작성하시면,
              할인 가격으로 상품이 등록됩니다.
            </p>
          </div>

          <div className="mb-3 flex flex-col gap-2.5">
            <div className="flex flex-col gap-2">
              <label htmlFor="originalPrice" className="text-xs font-semibold">
                판매 가격
              </label>

              <input
                type="text"
                id="originalPrice"
                {...register('originalPrice', {
                  required: '값을 입력해주세요.',
                  validate: {
                    validateNumber: value =>
                      !isNaN(Number(value)) || '숫자로 입력해주세요.',
                  },
                })}
                placeholder="0"
                className="rounded border border-transparent py-3.5 pl-3 focus:border-yellow"
              />

              <ErrorMessage>{errors.originalPrice?.message}</ErrorMessage>
            </div>

            <div className="flex flex-col">
              <label htmlFor="originalPrice" className="text-xs font-semibold">
                할인 가격
              </label>

              <input
                type="text"
                id="discountPrice"
                {...register('discountPrice', {
                  required: '값을 입력해주세요.',
                  validate: {
                    validateNumber: value =>
                      !isNaN(Number(value)) || '숫자로 입력해주세요.',
                    validateDiscount: (value, values) =>
                      value <= values.originalPrice ||
                      '할인된 상품을 등록해주세요.',
                  },
                })}
                placeholder="0"
                className="rounded border border-transparent py-3.5 pl-3 focus:border-yellow"
              />

              <ErrorMessage>{errors.discountPrice?.message}</ErrorMessage>
            </div>

            <div className="flex flex-col">
              <label htmlFor="originalPrice" className="text-xs font-semibold">
                상품 설명
              </label>

              <textarea
                id="description"
                {...register('description', { required: false })}
                placeholder="(선택 사항) 추가적인 상품 설명을 작성해주세요."
                className="resize-none rounded border border-transparent px-3 py-2 outline-none focus:border-yellow"
                maxLength={300}
              />
            </div>
          </div>

          <PrimaryButton
            type="submit"
            className="flex items-center justify-center"
          >
            {isPending ? <EditLoading /> : '수정하기'}
          </PrimaryButton>
        </div>
      </form>

      {errorPopUp && (
        <CustomPopUp
          btnClick={() => setErrorPopUp('')}
          mainText={errorPopUp}
          btnText="확인"
        />
      )}
    </>
  );
};

export default ItemEdit;
