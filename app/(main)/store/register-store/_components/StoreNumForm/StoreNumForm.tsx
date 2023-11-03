'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import ErrorText from '@/app/_components/ErrorText/ErrorText';
import { ERROR_MESSAGE } from '../../_constants/errorMessage';
import { validationStoreNum } from '../../_constants/validation';
import pageRoute from '@/app/_constants/route';

const StoreNumForm = () => {
  const [storeNum, setStoreNum] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setStoreNum(value);
  };

  const handleButton = () => {
    if (!error) {
      localStorage.setItem('dealight-storeNum', storeNum);
      router.push(pageRoute.store.registerStoreInfo());
    }
  };

  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      if (validationStoreNum(storeNum)) setError(true);
      else setError(false);
    } else {
      isMounted.current = true;
    }
  }, [storeNum]);

  return (
    <>
      <div className="mt-52 w-full text-center text-sm font-semibold">
        간편하게 등록하고
        <br /> 딜라잇(Dealight) 서비스를 이용해보세요
      </div>
      <form className="mt-11 w-full">
        <label className="text-xs font-semibold">사업자 등록번호</label>
        <div className="h-12 w-full bg-white outline-none">
          <input
            className={`h-12 w-full rounded ${
              error ? 'border-red' : 'border-yellow'
            } bg-white pl-3 outline-none focus:border-2`}
            type="string"
            name="storeNum"
            placeholder="1000100015"
            onChange={onChange}
          />
        </div>
        {error && <ErrorText>{ERROR_MESSAGE.STORE_NUM}</ErrorText>}
      </form>
      <div className="mb-7 mt-44 flex gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-yellow"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
      </div>
      <PrimaryButton onClick={handleButton}>다음</PrimaryButton>
    </>
  );
};

export default StoreNumForm;
