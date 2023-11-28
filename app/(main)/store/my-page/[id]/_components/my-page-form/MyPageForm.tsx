'use client';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import ImageUploader from '../image-uploader/ImageUploader';
import ProfileInformation from '../profile-information/ProfileInformation';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useState } from 'react';
import StoreInformation from '../store-information/StoreInformation';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import {
  isValidAddress,
  isValidPhoneNumber,
  isValidStoreNumber,
} from '../../_utils/validate';
import ManageButton from '../manage-button/ManageButton';
import LogoutButton from '@/app/_components/logout-button/LogoutButton';
import {
  isValidStoreCloseTime,
  isValidStoreOpenTime,
} from '@/app/(main)/store/register-store/_utils/validate';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { useRouter } from 'next/navigation';
import { usePatchMyProfile } from '@/app/_hooks/query/member';
import {
  storeKeys,
  useGetMyStore,
  usePatchStoreProfile,
} from '@/app/_hooks/query/store';
import { useQueryClient } from '@tanstack/react-query';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';
import pageRoute from '@/app/_constants/path';

type MyPageInputType = {
  phoneNumber: string;
  storePhoneNumber: string;
  storeAddress: string;
  storeOpenTime: string;
  storeCloseTime: string;
  dayOff: boolean | string[];
};

const MyPageForm = () => {
  const { storeId } = useUserInfo();

  const { nickName, phoneNumber, address } = useUserInfo();
  const { data: storeInfo } = useGetMyStore();

  const { mutate: patchMyProfile } = usePatchMyProfile();
  const { mutate: patchStoreProfile } = usePatchStoreProfile();

  const router = useRouter();
  const queryClient = useQueryClient();

  const { telephone, addressName, openTime, closeTime, dayOff } = storeInfo;

  const [open, setOpen] = useState(false);
  const [onClick, setOnClick] = useState(false);

  const schema = object().shape({
    phoneNumber: isValidPhoneNumber(),
    storePhoneNumber: isValidStoreNumber(),
    storeAddress: isValidAddress(),
    storeOpenTime: isValidStoreOpenTime(),
    storeCloseTime: isValidStoreCloseTime(),
  });

  //eslint-disable-next-line
  const methods = useForm<MyPageInputType | any>({
    resolver: yupResolver(schema),
    defaultValues: {
      phoneNumber,
      storePhoneNumber: telephone,
      storeAddress: addressName,
      storeOpenTime: openTime,
      storeCloseTime: closeTime,
      dayOff,
    },
  });

  const { storeAddress } = methods.watch();
  const { lat, lng } = useCoordinate(storeAddress ?? addressName);

  const changeStoreProfile = async () => {
    const {
      phoneNumber,
      storePhoneNumber,
      storeAddress,
      storeOpenTime,
      storeCloseTime,
      dayOff,
    } = methods.watch();

    patchMyProfile(
      {
        userInfo: {
          nickName: nickName!,
          phoneNumber,
          address,
        },
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['user-info'] });
        },
      }
    );

    patchStoreProfile(
      {
        storeId: storeId!,
        storeInfo: {
          telephone: storePhoneNumber,
          addressName: storeAddress,
          xCoordinate: lng,
          yCoordinate: lat,
          openTime: `${storeOpenTime}:00`,
          closeTime: `${storeCloseTime}:00`,
          dayOff: dayOff.length ? dayOff : ['연중 무휴'],
        },
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: storeKeys.myStore(),
          });
          setOpen(true);
        },
      }
    );
  };

  const onSubmit: SubmitHandler<MyPageInputType> = () => {
    if (onClick) {
      changeStoreProfile();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col pt-5">
          <ImageUploader />
          <ProfileInformation
            profile={{
              nickName: nickName!,
              phoneNumber: phoneNumber!,
              address,
            }}
            storeInfo={storeInfo}
          />
          <StoreInformation storeInfo={storeInfo} />
          <PrimaryButton
            className="mb-5"
            type="submit"
            onClick={() => {
              setOnClick(true);
            }}
          >
            정보 수정하기
          </PrimaryButton>
          <ManageButton />
          <LogoutButton />
        </div>
      </form>
      {open && (
        <CustomPopUp
          mainText="프로필이 수정되었습니다."
          btnText="확인"
          btnClick={() => router.push(pageRoute.store.home())}
        />
      )}
    </FormProvider>
  );
};
export default MyPageForm;
