'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { patchImage } from '../../_services/patchImage';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { deleteImage } from '../../_services/deleteImage';
import PopUp from '@/app/_components/pop-up/PopUp';

type ImageUploaderPropsType = {
  storeImage: string;
};

const ImageUploader = ({ storeImage }: ImageUploaderPropsType) => {
  const [imageUrl, setImageUrl] = useState(storeImage);
  const [openDeleteImage, setOpenDeleteImage] = useState(false);
  const fileInput = useRef(null);

  const { storeId } = useUserInfo();

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files![0];
    if (!file) return;

    await patchImage({
      req: {
        storeId,
        formData: file,
      },
    });

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.readyState === 2 && typeof reader.result === 'string') {
        setImageUrl(reader.result);
      }
    };
  };

  const deleteStoreImage = () => {
    setOpenDeleteImage(true);
  };

  return (
    <>
      <div className="relative mb-2.5 h-44 w-full rounded bg-white">
        <Image src={imageUrl} fill alt="프로필 이미지" className="rounded" />
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
        onClick={deleteStoreImage}
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
          rightBtnClick={async () => {
            await deleteImage(storeId);
            setOpenDeleteImage(false);
            window.location.reload();
          }}
        />
      )}
    </>
  );
};

export default ImageUploader;
