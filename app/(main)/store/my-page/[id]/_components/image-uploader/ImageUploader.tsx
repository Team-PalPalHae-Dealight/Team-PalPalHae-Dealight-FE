'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import PopUp from '@/app/_components/pop-up/PopUp';
import {
  storeKeys,
  useDeleteStoreImage,
  useGetMyStore,
  usePatchStoreImage,
} from '@/app/_hooks/query/store';
import { useQueryClient } from '@tanstack/react-query';

const ImageUploader = () => {
  const fileInput = useRef(null);

  const { storeId } = useUserInfo();

  const { data: storeInfo } = useGetMyStore();
  const { image } = storeInfo;

  const { mutate: patchStoreImage } = usePatchStoreImage();
  const { mutate: deleteStoreImage } = useDeleteStoreImage();

  const queryClient = useQueryClient();

  const [imageUrl, setImageUrl] = useState(image);
  const [openDeleteImage, setOpenDeleteImage] = useState(false);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files![0];
    if (!file) return;

    patchStoreImage(
      { storeId: storeId!, formData: file },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: storeKeys.myStore(),
          });
        },
      }
    );

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.readyState === 2 && typeof reader.result === 'string') {
        setImageUrl(reader.result);
      }
    };
  };

  const openDeletePopup = () => {
    setOpenDeleteImage(true);
  };

  const removeStoreImage = () => {
    deleteStoreImage(
      { storeId: storeId! },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: storeKeys.myStore(),
          });
        },
      }
    );

    setOpenDeleteImage(false);
    window.location.reload();
  };

  return (
    <>
      <div className="relative mb-2.5 h-44 w-full rounded bg-white">
        <Image
          priority
          fill
          alt={imageUrl}
          src={imageUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>

      <label htmlFor="input-file">
        <div className="flex h-12 w-full cursor-pointer items-center justify-center rounded-md bg-yellow text-base text-black shadow">
          업체 사진 변경하기
        </div>
      </label>
      <input
        type="file"
        name="image_URL"
        id="input-file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={handleImage}
      />
      <button
        className="mt-2.5 h-12 w-full rounded-md bg-light-gray text-base text-red shadow"
        onClick={openDeletePopup}
      >
        업체 사진 삭제하기
      </button>
      {openDeleteImage && (
        <PopUp
          mainText="업체 사진을 삭제하시겠습니까?"
          subText="사진을 삭제할 경우 기본 이미지로 설정됩니다."
          leftBtnText="아니요"
          leftBtnClick={() => setOpenDeleteImage(false)}
          rightBtnText="예"
          rightBtnClick={removeStoreImage}
        />
      )}
    </>
  );
};

export default ImageUploader;
