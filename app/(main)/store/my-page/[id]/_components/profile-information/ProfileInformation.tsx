'use client';

import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { MyProfileType } from '@/app/_types/member/profileType';
import { MyStoreInfo } from '@/app/_types/store/storeType';

type ProfileInformationPropsType = {
  profile: MyProfileType;
  storeInfo: MyStoreInfo;
};

const ProfileInformation = ({
  profile,
  storeInfo,
}: ProfileInformationPropsType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { nickName, phoneNumber } = profile;

  const { name, storeStatus } = storeInfo;

  return (
    <div className="min-h-64 my-5 w-full rounded bg-white text-sm font-semibold">
      <div className="p-4">
        <div className="pb-4 text-xl">프로필 관리</div>
        <div className="pb-2.5">
          상호명 : <span className="font-normal">{name}</span>
        </div>
        <div className="pb-2.5">
          대표자명 : <span className="font-normal">{nickName}</span>
        </div>
        <div className="flex flex-col pb-1.5">
          <div className="pb-1.5 text-xs font-semibold">대표자 전화번호 :</div>
          <input
            className="flex-1 border-1 border-solid border-dark-gray p-1.5 pl-1 text-sm font-normal outline-none"
            type="text"
            defaultValue={phoneNumber!}
            {...register('phoneNumber')}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="phoneNumber"
          render={({ message }) => (
            <div className="w-full pb-2.5 text-left text-xs font-normal text-red">
              {message}
            </div>
          )}
        />
        <div className="pb-2.5">
          영업 상태 :{' '}
          <span className="font-normal text-black">{storeStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
