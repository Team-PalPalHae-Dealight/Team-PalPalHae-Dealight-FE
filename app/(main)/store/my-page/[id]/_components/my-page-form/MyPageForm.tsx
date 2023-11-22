'use client';

import { useForm, FormProvider } from 'react-hook-form';
import ImageUploader from '../image-uploader/ImageUploader';
import ProfileInformation from '../profile-information/ProfileInformation';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import LogoutButton from '../logout-button/LogoutButton';
import { useState } from 'react';
import StoreInformation from '../store-information/StoreInformation';

const MyPageForm = () => {
  const [image, setImage] = useState('');
  const methods = useForm();
  console.log(image);

  //   const onSubmit: SubmitHandler<ProfileType> = () => {
  //     const {
  //       phoneNumber,
  //       storePhone,
  //       openHour,
  //       openMinute,
  //       closeHour,
  //       closeMinute,
  //       storeDayOff,
  //     } = methods.watch();
  //     console.log(phoneNumber);
  //     console.log(storePhone);
  //     console.log(openHour);
  //     console.log(openMinute);
  //     console.log(closeHour);
  //     console.log(closeMinute);
  //     console.log(storeDayOff);
  //     console.log(image);
  //   };

  const getImage = (imageUrl: string) => {
    setImage(imageUrl);
  };

  return (
    <FormProvider {...methods}>
      <form>
        <div className="flex w-full flex-col px-5 pt-5">
          <ImageUploader getImage={getImage} />
          <ProfileInformation />
          <StoreInformation />
          <PrimaryButton className="mb-5" type="submit" onClick={() => {}}>
            정보 수정하기
          </PrimaryButton>
          <LogoutButton />
        </div>
      </form>
    </FormProvider>
  );
};

export default MyPageForm;
