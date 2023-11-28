'use client';

import { ErrorMessage } from '@hookform/error-message';
import { object } from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ERROR_MESSAGE } from '@/app/_constants/errorMessage';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import pageRoute from '@/app/_constants/path';
import { useRouter } from 'next/navigation';
import AddressButton from '@/app/_components/AddressButton/AddressButton';
import { useState, useEffect } from 'react';
import { isValidStoreName, isValidStorePhone } from '../../_utils/validate';
import LocalStorage from '@/app/_utils/localstorage';
import { yupResolver } from '@hookform/resolvers/yup';
import useCoordinate from '@/app/_hooks/useCoordinate';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

type initialValuesType = {
  storeName: string;
  storePhone: string;
};

const StoreInfoForm = () => {
  const router = useRouter();

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(true);
  const [click, setClick] = useState(false);
  const coords = useCoordinate(address);
  const { providerId } = useUserInfo();

  const schema = object().shape({
    storeName: isValidStoreName(),
    storePhone: isValidStorePhone(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<initialValuesType>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<initialValuesType> = () => {
    const { storeName, storePhone } = watch();
    const address = LocalStorage.getItem('dealight-storeAddress');

    if (address) setAddressError(false);

    if (!addressError && storeName && storePhone) {
      LocalStorage.setItem('dealight-storeName', storeName);
      LocalStorage.setItem('dealight-storePhone', storePhone);

      router.push(pageRoute.store.registerStoreTime(String(providerId)));
    }

    setClick(true);
  };

  const handleAddressButton = (address: string) => {
    LocalStorage.setItem('dealight-storeAddress', address);
    LocalStorage.setItem('dealight-coords-x', coords.lng);
    LocalStorage.setItem('dealight-coords-y', coords.lat);

    setAddress(address);
    setAddressError(false);
  };

  useEffect(() => {
    const storeAddress = LocalStorage.getItem('dealight-storeAddress') ?? '';
    setAddress(storeAddress);
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <form className="mt-40 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-xs font-semibold" htmlFor="storeName">
            업체 이름
          </label>
          <input
            type="text"
            className={`h-12 w-full rounded text-base text-black ${
              errors.storeName ? 'border-red' : 'border-yellow'
            } cursor-pointer bg-white pl-3 outline-none focus:border-2`}
            placeholder="업체명"
            {...register('storeName')}
          />
          <ErrorMessage
            errors={errors}
            name="storeName"
            render={({ message }) => (
              <div className="w-full text-left text-xs text-red">{message}</div>
            )}
          />
        </div>
        <div className="mt-5">
          <label
            className="mt-5 text-xs font-semibold text-black"
            htmlFor="storePhone"
          >
            업체 전화번호
          </label>
          <input
            type="text"
            className={`h-12 w-full rounded text-base text-black ${
              errors.storePhone ? 'border-red' : 'border-yellow'
            } cursor-pointer bg-white pl-3 outline-none focus:border-2`}
            placeholder="0311234567"
            {...register('storePhone')}
          />
          <ErrorMessage
            errors={errors}
            name="storePhone"
            render={({ message }) => (
              <div className="w-full text-left text-xs text-red">{message}</div>
            )}
          />
        </div>
        <div className="mt-5">
          <label className="text-xs font-semibold" htmlFor="storeAddress">
            업체 주소
          </label>
          <div className="flex gap-x-2">
            <div
              className={`base-2/5 h-12 w-full truncate rounded bg-white py-3 pl-3 text-base text-black outline-none`}
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
        </div>
        <div className="mb-7 mt-24 flex justify-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
        </div>
        <PrimaryButton type="submit" onClick={() => {}}>
          다음
        </PrimaryButton>
      </form>
    </div>
  );
};

export default StoreInfoForm;
