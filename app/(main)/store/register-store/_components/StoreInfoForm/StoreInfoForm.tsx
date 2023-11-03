'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import ErrorText from '@/app/_components/ErrorText/ErrorText';
import { ERROR_MESSAGE } from '../../_constants/errorMessage';
import {
  validationStoreAddress,
  validationStoreName,
  validationStorePhone,
} from '../../_constants/validation';
import pageRoute from '@/app/_constants/route';

const StoreInfoForm = () => {
  const [storeInfo, setStoreInfo] = useState({
    storeName: '',
    storePhone: '',
    storeAddress: '',
  });
  const [error, setError] = useState({
    storeName: false,
    storePhone: false,
    storeAddress: false,
  });
  const router = useRouter();

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = event;
    setStoreInfo({ ...storeInfo, [name]: value });
    console.log(storeInfo);
  };

  const handleButton = () => {
    if (!error.storeName && !error.storePhone && !error.storeAddress) {
      localStorage.setItem('dealight-storeName', storeInfo.storeName);
      localStorage.setItem('dealight-storePhone', storeInfo.storePhone);
      localStorage.setItem('dealight-storeAddress', storeInfo.storeAddress);
      router.push(pageRoute.store.registerStoreTime());
    }
  };

  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      validationStoreName(storeInfo.storeName)
        ? setError({ ...error, ['storeName']: true })
        : setError({ ...error, ['storeName']: false });
      validationStorePhone(storeInfo.storePhone)
        ? setError({ ...error, ['storePhone']: true })
        : setError({ ...error, ['storePhone']: false });
      validationStoreAddress(storeInfo.storeAddress)
        ? setError({ ...error, ['storeAddress']: true })
        : setError({ ...error, ['storeAddress']: false });
    } else {
      isMounted.current = true;
    }
  }, [storeInfo, error]);

  return (
    <>
      <form className="mt-40 w-full">
        <label className="text-xs font-semibold">업체 이름</label>
        <div className="h-12 w-full bg-white outline-none">
          <input
            className={`h-12 w-full rounded ${
              error.storeName ? 'border-red' : 'border-yellow'
            } bg-white pl-3 outline-none focus:border-2`}
            type="string"
            name="storeName"
            placeholder="딜라잇마켓"
            onChange={onChange}
          />
        </div>
        {error.storeName && <ErrorText>{ERROR_MESSAGE.STORE_NAME}</ErrorText>}
        <label className="mt-5 text-xs font-semibold">업체 전화번호</label>
        <div className="h-12 w-full bg-white outline-none">
          <input
            className={`h-12 w-full rounded ${
              error.storePhone ? 'border-red' : 'border-yellow'
            } bg-white pl-3 outline-none focus:border-2`}
            type="string"
            name="storePhone"
            placeholder="0311234567"
            onChange={onChange}
          />
        </div>
        {error.storePhone && <ErrorText>{ERROR_MESSAGE.STORE_PHONE}</ErrorText>}
        <label className="mt-5 text-xs font-semibold">업체 주소</label>
        <div className="flex gap-x-2">
          <div className="h-12 w-full rounded bg-white outline-none"></div>
        </div>

        {error.storeAddress && (
          <ErrorText>{ERROR_MESSAGE.STORE_ADDRESS}</ErrorText>
        )}
      </form>
      <div className="mb-7 mt-44 flex gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-yellow"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
      </div>
      <PrimaryButton onClick={handleButton}>다음</PrimaryButton>
    </>
  );
};

export default StoreInfoForm;
