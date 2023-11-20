'use client';

import { useForm, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { object } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { isValidPhoneNumber } from '@/app/(main)/customer/my-page/[id]/_utils/validate';

type initialValuesType = {
  phoneNumber: string;
};

const ProfileInformation = () => {
  const schema = object().shape({
    phoneNumber: isValidPhoneNumber(),
  });

  const {
    formState: { errors },
  } = useForm<initialValuesType>({
    resolver: yupResolver(schema),
  });

  const { register } = useFormContext();

  return (
    <div className="min-h-64 my-5 w-full rounded bg-white text-sm font-semibold text-black">
      <div className="p-4">
        <div className="pb-4 text-lg">프로필 관리</div>
        <div className="pb-2.5">
          상호명 :{' '}
          <span className="font-normal text-black">{data.storeName}</span>
        </div>
        <div className="pb-2.5">
          대표자명 :{' '}
          <span className="font-normal text-black">{data.userName}</span>
        </div>
        <div className="flex items-center pb-2.5">
          <span>대표자 전화번호 :</span>
          <input
            className="ml-2 flex-1 border-1 border-solid border-dark-gray p-1.5 text-xs font-normal text-dark-gray outline-none"
            type="text"
            defaultValue={data.phoneNumber}
            {...register('phoneNumber')}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="phoneNumber"
          render={({ message }) => (
            <div className="w-full text-left text-xs text-red">{message}</div>
          )}
        />
        <div className="pb-2.5">
          영업 상태 :{' '}
          <span className="font-normal text-black">{data.status}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;

/** @TODO API 연결 후 res로 받은 데이터로 초기화시키기 */
export const data = {
  storeName: '행복도너츠가게',
  userName: '오프와 에프',
  phoneNumber: '01012345678',
  status: '영업 중',
};
