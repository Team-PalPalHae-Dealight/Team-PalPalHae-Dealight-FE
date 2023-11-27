'use client';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import ImageUploader from '../image-uploader/ImageUploader';
import ProfileInformation from '../profile-information/ProfileInformation';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useCallback, useEffect, useState } from 'react';
import StoreInformation from '../store-information/StoreInformation';
import { getProfile } from '../../_services/getProfile';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';
import {
  isValidAddress,
  isValidPhoneNumber,
  isValidStoreNumber,
} from '../../_utils/validate';
import { getMember } from '@/app/_services/member/getMember';
import { profileType } from '../../_types/profileType';
import ManageButton from '../manage-button/ManageButton';
import { patchProfile } from '../../_services/patchProfile';
import { patchMember } from '@/app/_services/member/patchMember';
import LogoutButton from '@/app/_components/logout-button/LogoutButton';
import Spinner from '@/app/_components/spinner/Spinner';
import {
  isValidStoreCloseTime,
  isValidStoreOpenTime,
} from '@/app/(main)/store/register-store/_utils/validate';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';

type MyPageInputType = {
  userPhone: string;
  telephone: string;
  address: string;
  openTime: string;
  closeTime: string;
  dayOff: boolean | string[];
};

const MyPageForm = () => {
  const router = useRouter();

  const schema = object().shape({
    userPhone: isValidPhoneNumber(),
    telephone: isValidStoreNumber(),
    address: isValidAddress(),
    openTime: isValidStoreOpenTime(),
    closeTime: isValidStoreCloseTime(),
  });

  //eslint-disable-next-line
  const methods = useForm<MyPageInputType | any>({
    resolver: yupResolver(schema),
  });

  const { storeAddress } = methods.watch();

  const [profile, setProfile] = useState<profileType>();

  const { storeId } = useUserInfo();
  const newCoords = useCoordinate(storeAddress);

  const onSubmit: SubmitHandler<MyPageInputType> = data => {
    console.log('data = ', data);
    changeProfile();
  };

  const getData = useCallback(async () => {
    if (storeId) {
      const res = await getProfile();
      const { nickName, phoneNumber } = await getMember();

      const data = {
        addressName: res.addressName,
        closeTime: res.closeTime,
        dayOff: res.dayOff,
        image: res.image,
        name: res.name,
        openTime: res.openTime,
        storeNumber: res.storeNumber,
        storeStatus: res.storeStatus,
        telephone: res.telephone,
        userPhone: phoneNumber,
        userName: nickName,
      };

      setProfile(data);
    }
  }, [storeId]);

  const changeProfile = async () => {
    const { userPhone, telephone, storeAddress, openTime, closeTime, dayOff } =
      methods.watch();

    const { nickName, phoneNumber, address } = await getMember();

    await patchMember({
      req: {
        nickName,
        phoneNumber: userPhone ?? phoneNumber,
        address,
      },
    });

    await patchProfile({
      req: {
        storeId,
        telephone: telephone ?? profile?.telephone,
        addressName: storeAddress ?? profile?.addressName,
        xCoordinate: newCoords.lng,
        yCoordinate: newCoords.lat,
        openTime: openTime ?? profile?.openTime,
        closeTime: closeTime ?? profile?.closeTime,
        dayOff: !dayOff ? ['연중 무휴'] : dayOff,
      },
    });

    router.push(pageRoute.store.home());
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col px-5 pt-5">
          {profile ? (
            <>
              <ImageUploader storeImage={profile.image} />
              <ProfileInformation data={profile} />
              <StoreInformation data={profile} />
            </>
          ) : (
            <div className="flex h-80 w-full items-center justify-center">
              <Spinner />
            </div>
          )}
          <PrimaryButton className="mb-5" type="submit" onClick={() => {}}>
            정보 수정하기
          </PrimaryButton>
          <ManageButton />
          <LogoutButton />
        </div>
      </form>
    </FormProvider>
  );
};

export default MyPageForm;
