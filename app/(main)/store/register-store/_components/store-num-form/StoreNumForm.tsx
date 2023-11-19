'use client';

import { ErrorMessage } from '@hookform/error-message';
import { object } from 'yup';
import { useRouter } from 'next/navigation';
import LocalStorage from '@/app/_utils/localstorage';
import pageRoute from '@/app/_constants/path';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { isValidStoreNumber } from '../../_utils/validate';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type initialValuesType = {
  storeNumber: string;
};

const StoreNumForm = () => {
  const router = useRouter();

  const schema = object().shape({
    storeNumber: isValidStoreNumber(),
  });

  const onSubmit: SubmitHandler<initialValuesType> = () => {
    /** @todo api 연결 */
    const { storeNumber } = watch();
    LocalStorage.setItem('dealight-storeNumber', storeNumber);

    router.push(pageRoute.store.registerStoreInfo());
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<initialValuesType>({ resolver: yupResolver(schema) });

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-11 mt-52 w-full text-center text-sm font-semibold">
        간편하게 등록하고
        <br /> 딜라잇(Dealight) 서비스를 이용해보세요
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-xs font-semibold" htmlFor="storeNumber">
          사업자 등록번호
        </label>
        <input
          type="text"
          className={`h-12 w-full rounded ${
            errors.storeNumber ? 'border-red' : 'border-yellow'
          } cursor-pointer bg-white pl-3 outline-none focus:border-2`}
          placeholder="1007999997"
          {...register('storeNumber')}
        />
        <ErrorMessage
          errors={errors}
          name="storeNumber"
          render={({ message }) => (
            <div className="w-full text-left text-xs text-red">{message}</div>
          )}
        />
        <div className="mb-7 mt-44 flex justify-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-yellow"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
        </div>
        <PrimaryButton type="submit" onClick={() => {}}>
          다음
        </PrimaryButton>
      </form>
    </div>
  );
};

export default StoreNumForm;
