'use client';

import { useState } from 'react';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { isValidNickName, isValidPhoneNumber } from '../../_utils/validate';
import { SubmitHandler, useForm } from 'react-hook-form';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import AddressButton from '@/app/_components/AddressButton/AddressButton';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { ErrorMessage } from '@hookform/error-message';
import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';
import LogoutButton from '@/app/_components/logout-button/LogoutButton';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';
import pageRoute from '@/app/_constants/path';
import { useRouter } from 'next/navigation';
import { isValidRequire } from '@/app/(main)/store/my-page/[id]/_utils/validate';
import { useQueryClient } from '@tanstack/react-query';
import {
  usePatchMyProfile,
  usePostDuplicateNickName,
} from '@/app/_hooks/query/member';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

type initialValuesType = {
  nickName: string;
  phoneNumber: string;
  addressName: string;
};

const MyPageContents = () => {
  const { nickName, phoneNumber, address } = useUserInfo();

  const { mutate: patchMyProfile } = usePatchMyProfile();
  const { mutate: postDuplicateNickName } = usePostDuplicateNickName();

  const router = useRouter();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [onClick, setOnClick] = useState(false);
  const [duplicateClick, setDuplicateClick] = useState(false);
  const [notDuplicate, setNotDuplicate] = useState(true);

  const schema = object().shape({
    nickName: isValidNickName(),
    phoneNumber: isValidPhoneNumber(),
    addressName: isValidRequire(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<initialValuesType>({
    resolver: yupResolver(schema),
    defaultValues: {
      nickName: nickName!,
      phoneNumber: phoneNumber!,
      addressName: address.name,
    },
  });

  const { addressName } = watch();
  const { lat, lng, changeCoords } = useCoordinate(addressName ?? address.name);

  const handleAddressButton = (address: string) => {
    setValue('addressName', address);
    changeCoords(address);
  };

  const checkNickName = async () => {
    const { nickName: nickname } = watch();

    setDuplicateClick(true);

    if (nickname !== nickName) {
      postDuplicateNickName(
        { nickName: nickname },
        {
          onSuccess: res => {
            if (res.status === 204) {
              setNotDuplicate(true);
              setOnClick(false);
            }
          },
          onError: () => {
            setNotDuplicate(false);
            setOnClick(false);
          },
        }
      );
    }
  };

  const changeProfile = async () => {
    const { nickName: nickname, phoneNumber, addressName } = watch();

    if (notDuplicate) {
      patchMyProfile(
        {
          userInfo: {
            nickName: nickname ?? nickName,
            phoneNumber,
            address: {
              name: addressName,
              xCoordinate: lng,
              yCoordinate: lat,
            },
          },
        },
        {
          onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['user-info'] });
            setOpen(true);
          },
        }
      );
    }
  };

  const onSubmit: SubmitHandler<initialValuesType> = () => {
    if (onClick) {
      changeProfile();
    }
  };

  return (
    <form className="w-full pt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 rounded bg-white p-4">
        <div className="pb-2.5 text-lg font-semibold text-black">
          프로필 관리
        </div>
        <label className="w-full text-xs font-semibold" htmlFor="nickName">
          닉네임
        </label>
        <div className="flex justify-between gap-2">
          <input
            className={`h-12 w-full rounded bg-light-gray text-xs ${
              errors.nickName ? 'border-red' : 'border-yellow'
            } cursor-pointer pl-3 outline-none focus:border-2`}
            {...register('nickName')}
          />
          <button
            className="min-w-fit rounded bg-yellow px-2"
            onClick={checkNickName}
          >
            중복 검사
          </button>
        </div>
        {duplicateClick && (
          <div>
            {notDuplicate ? (
              <div className="w-full text-xs text-blue">
                사용가능한 닉네임입니다.
              </div>
            ) : (
              <div className="w-full text-xs text-red">
                사용 불가능한 닉네임입니다.
              </div>
            )}
          </div>
        )}

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
          className={`h-12 w-full rounded bg-light-gray text-xs ${
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
      <div className="flex w-full items-center justify-between pb-2.5">
        <input
          className={`h-12 w-full flex-1 truncate rounded bg-white text-xs ${
            errors.addressName ? 'border-red' : 'border-yellow'
          } cursor-pointer pl-3 outline-none focus:border-2`}
          type="text"
          disabled
          {...register('addressName')}
        />
        <AddressButton
          type="button"
          getAddress={handleAddressButton}
          className="ml-2.5 min-w-fit rounded bg-yellow px-3 py-2.5 text-xs font-normal"
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
            lat,
            lng,
            title: '',
          }}
        />
      </div>
      <PrimaryButton
        type="submit"
        className="mb-5"
        onClick={() => {
          setOnClick(true);
        }}
      >
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
