'use client';

import { useState } from 'react';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { isValidNickName, isValidPhoneNumber } from '../../_utils/validate';
import { SubmitHandler, useForm } from 'react-hook-form';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import AddressButton from '@/app/_components/AddressButton/AddressButton';
import { ERROR_MESSAGE } from '@/app/_constants/errorMessage';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { ErrorMessage } from '@hookform/error-message';
import KakaoMap from '@/app/_components/KakaoMap/KakaoMap';

type initialValuesType = {
  nickName: string;
  phoneNumber: string;
};

const MyPageContents = () => {
  const [address, setAddress] = useState(data.address);
  const [addressError, setAddressError] = useState(true);
  const [click, setClick] = useState(false);
  const [coords, setCoords] = useState([0, 0]);

  const mapInformation = useCoordinate(address);
  //eslint-disable-next-line
  mapInformation?.then((value: any) => setCoords([value[0].x, value[0].y]));

  const schema = object().shape({
    nickName: isValidNickName(),
    phoneNumber: isValidPhoneNumber(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<initialValuesType>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<initialValuesType> = () => {
    /** @todo api 연결 */
    const { nickName, phoneNumber } = watch();
    console.log(nickName, phoneNumber, address);
    console.log(coords);
    if (address) setAddressError(false);
    setClick(true);
  };

  const handleAddressButton = (address: string) => {
    setAddress(address);
    setAddressError(false);
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
        <input
          className={`h-12 w-full rounded bg-light-gray text-sm text-dark-gray ${
            errors.nickName ? 'border-red' : 'border-yellow'
          } cursor-pointer pl-3 outline-none focus:border-2`}
          defaultValue={data.nickName}
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
          className={`h-12 w-full rounded bg-light-gray text-sm text-dark-gray ${
            errors.phoneNumber ? 'border-red' : 'border-yellow'
          } cursor-pointer pl-3 outline-none focus:border-2`}
          defaultValue={data.phoneNumber}
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
          className={`base-2/5 h-12 w-full rounded bg-white py-3 pl-3 text-sm text-dark-gray outline-none`}
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
      {click && addressError && (
        <div className="w-full text-left text-xs text-red">
          {ERROR_MESSAGE.STORE_REQUIRED}
        </div>
      )}
      <div className="pb-5">
        <KakaoMap
          height="220px"
          onClickCurrentPosition={() => {}}
          onClickPosition={() => {}}
          currentPosition={{ lat: coords[0], lng: coords[1], title: '' }}
        />
      </div>
      <PrimaryButton className="mb-5" type="submit" onClick={() => {}}>
        정보 수정하기
      </PrimaryButton>
      <button
        style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
        className="mb-5 h-12 w-full rounded-md bg-light-gray text-base text-red"
      >
        로그아웃
      </button>
    </form>
  );
};
export default MyPageContents;

export const data = {
  nickName: '오프와 에프',
  phoneNumber: '01012345678',
  address: '서울 강남구 강남대로 지하 396',
};
