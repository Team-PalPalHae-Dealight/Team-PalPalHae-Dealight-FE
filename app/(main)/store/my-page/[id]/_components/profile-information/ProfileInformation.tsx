'use client';

import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { profileType } from '../../_types/profileType';

const ProfileInformation = (props: { data: profileType }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="min-h-64 my-5 w-full rounded bg-white text-sm font-semibold text-black">
      <div className="p-4">
        <div className="pb-4 text-lg">프로필 관리</div>
        <div className="pb-2.5">
          상호명 :{' '}
          <span className="font-normal text-black">{props.data.name}</span>
        </div>
        <div className="pb-2.5">
          대표자명 :{' '}
          <span className="font-normal text-black">{props.data.userName}</span>
        </div>
        <div className="flex items-center pb-2.5">
          <span>대표자 전화번호 :</span>
          <input
            className="ml-2 flex-1 border-1 border-solid border-dark-gray p-1.5 text-sm font-normal text-black outline-none"
            type="text"
            defaultValue={props.data.userPhone}
            {...register('userPhone')}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="userPhone"
          render={({ message }) => (
            <div className="w-full pb-1.5 text-left text-xs font-normal text-red">
              {message}
            </div>
          )}
        />
        <div className="pb-2.5">
          영업 상태 :{' '}
          <span className="font-normal text-black">
            {props.data.storeStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
