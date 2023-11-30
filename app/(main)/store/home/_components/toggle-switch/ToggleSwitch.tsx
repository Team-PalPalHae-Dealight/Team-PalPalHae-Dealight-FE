'use client';

import { useState } from 'react';
import { patchStatus } from '@/app/(main)/store/home/_services/patchStatus';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import PopUp from '@/app/_components/pop-up/PopUp';
import { storeKeys } from '@/app/_hooks/query/store';
import { useQueryClient } from '@tanstack/react-query';

type ToggleSwitchPropsType = {
  status: string;
};

const ToggleSwitch = ({ status }: ToggleSwitchPropsType) => {
  const [onPopUp, setOnPopUp] = useState(false);
  const { storeId } = useUserInfo();

  const queryClient = useQueryClient();

  const onClickToggle = async () => {
    if (status === '영업 중') {
      setOnPopUp(true);
    } else {
      await patchStatus(storeId, '영업 중').then(async () => {
        await queryClient.invalidateQueries({
          queryKey: storeKeys.status(String(storeId)),
        });
      });
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="relative mr-5 inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={status === '영업 중'}
            readOnly
          />
          <div
            onClick={onClickToggle}
            className="peer h-6 w-11 rounded-full bg-dark-gray  after:absolute  after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-dark-gray after:bg-white after:transition-all after:content-[''] peer-checked:bg-cyan peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-cyan"
          ></div>
        </label>
      </div>
      {onPopUp && (
        <PopUp
          mainText={'영업을 종료하시겠습니까?'}
          subText={'영업을 종료하시면 등록한 상품이 모두 삭제됩니다.'}
          leftBtnText={'아니요'}
          rightBtnText={'네'}
          leftBtnClick={() => setOnPopUp(false)}
          rightBtnClick={async () => {
            await patchStatus(storeId, '영업 준비 중').then(async () => {
              await queryClient.invalidateQueries({
                queryKey: storeKeys.status(String(storeId)),
              });
            });

            setOnPopUp(false);
          }}
        />
      )}
    </div>
  );
};

export default ToggleSwitch;
