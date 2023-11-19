'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState('');
  const fileInput = useRef(null);

  //eslint-disable-next-line
  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    //eslint-disable-next-line
    reader.onload = (e: any) => {
      if (reader.readyState === 2) {
        setImage(e.target.result);
      }
    };
  };

  return (
    <>
      {image ? (
        <div className="relative mb-2.5 h-44 w-full rounded bg-white">
          <Image src={image} fill alt="프로필 이미지" className="rounded" />
        </div>
      ) : (
        <div className="mb-2.5 flex h-44 w-full items-center justify-center rounded bg-white text-sm text-dark-gray">
          등록된 이미지가 없습니다
        </div>
      )}
      <label htmlFor="input-file">
        <div className="flex h-12 w-full items-center justify-center rounded-md bg-yellow text-base text-black">
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
    </>
  );
};

export default ImageUploader;
