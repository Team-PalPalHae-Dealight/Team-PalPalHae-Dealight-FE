'use client';

import { useEffect, useState } from 'react';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { isValidNickName, isValidPhoneNumber } from '../../_utils/validate';
import { SubmitHandler, useForm } from 'react-hook-form';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import AddressButton from '@/app/_components/AddressButton/AddressButton';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { ErrorMessage } from '@hookform/error-message';
import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import { profileType } from '../../../../../../_types/member/profileType';
import { patchMember } from '@/app/_services/member/patchMember';
import { getMember } from '@/app/_services/member/getMember';
import LogoutButton from '@/app/_components/logout-button/LogoutButton';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';
import pageRoute from '@/app/_constants/path';
import { useRouter } from 'next/navigation';

type initialValuesType = {
  nickName: string;
  phoneNumber: string;
};

const MyPageContents = () => {
  const [profile, setProfile] = useState<profileType>();
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  const coords = useCoordinate(address);
  const router = useRouter();

  const schema = object().shape({
    nickName: isValidNickName(),
    phoneNumber: isValidPhoneNumber(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<initialValuesType>({
    resolver: yupResolver(schema),
    defaultValues: async () => await getMember(),
  });

  const changeProfile = async () => {
    const { nickName, phoneNumber } = watch();

    const res = await patchMember({
      req: {
        nickName: nickName,
        phoneNumber: phoneNumber,
        address: {
          name: address,
          xCoordinate: coords.lat,
          yCoordinate: coords.lng,
        },
      },
    });

    if (res.status === 200) {
      setOpen(true);
    }
  };

  const onSubmit: SubmitHandler<initialValuesType> = () => {
    setClick(true);
    console.log(click, profile);
  };

  const handleAddressButton = (address: string) => {
    setAddress(address);
  };

  const getData = async () => {
    const profileData = await getMember();
    setProfile(profileData);
    setAddress(profileData.address.name);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <form className="w-full pt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 rounded bg-white p-4">
        <div className="pb-2.5 text-lg font-semibold text-black">
          프로필 관리
        </div>
        <label className="w-full text-xs font-semibold" htmlFor="nickName">
          닉네임
        </label>
        <input
          className={`h-12 w-full rounded bg-light-gray text-sm ${
            errors.nickName ? 'border-red' : 'border-yellow'
          } cursor-pointer pl-3 outline-none focus:border-2`}
          {...register('nickName')}
        />
        <ErrorMessage
          errors={errors}
          name="nickName"
          render={({ message }) => (
            <div className="w-full text-left text-xs text-red">{message}</div>
          )}
        />
        <label className="text-xs font-semibold" htmlFor="phoneNumber">
          전화번호
        </label>
        <input
          className={`h-12 w-full rounded bg-light-gray text-sm ${
            errors.phoneNumber ? 'border-red' : 'border-yellow'
          } cursor-pointer pl-3 outline-none focus:border-2`}
          {...register('phoneNumber')}
        />
        <ErrorMessage
          errors={errors}
          name="phoneNumber"
          render={({ message }) => (
            <div className="w-full text-left text-xs text-red">{message}</div>
          )}
        />
      </div>

      <label className="text-xs font-semibold">주소</label>
      <div className="flex gap-x-2 pb-2.5">
        <div
          className={
            'base-2/5 h-12 w-full rounded bg-white py-3 pl-3 text-sm outline-none'
          }
        >
          {address}
        </div>
        <AddressButton
          type="button"
          getAddress={handleAddressButton}
          className="base-3/5 h-12 min-w-fit rounded bg-yellow px-1 text-sm"
        >
          주소찾기
        </AddressButton>
      </div>
      <div className="pb-5">
        <KakaoMap
          height="220px"
          onClickCurrentPosition={() => {}}
          onClickPosition={() => {}}
          currentPosition={{
            lat: coords.lat,
            lng: coords.lng,
            title: '',
          }}
        />
      </div>
      <PrimaryButton type="button" className="mb-5" onClick={changeProfile}>
        정보 수정하기
      </PrimaryButton>
      <LogoutButton />
      {open && (
        <CustomPopUp
          mainText="프로필이 수정되었습니다."
          btnText="확인"
          btnClick={() => router.push(pageRoute.customer.home())}
        />
      )}
    </form>
  );
};
export default MyPageContents;
