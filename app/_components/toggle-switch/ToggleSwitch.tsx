'use client';

import { useEffect, useState } from 'react';
import PopUp from '../pop-up/PopUp';
import { patchStatus } from '@/app/(main)/store/home/_services/patchStatus';
import { getStatus } from '@/app/(main)/store/home/_services/getStatus';

type ToggleSwitchPropsType = {
  getToggleValue: (toggle: boolean) => void;
};

const ToggleSwitch = ({ getToggleValue }: ToggleSwitchPropsType) => {
  const [isOn, setIsOn] = useState(false);
  const [onPopUp, setOnPopUp] = useState(false);

  const onClickToggleSwitch = async () => {
    if (isOn) {
      setOnPopUp(true);
    } else {
      setIsOn(true);
      await patchStatus(1, '영업 중');
    }
    setStoreStatus();
  };

  const onClickLeftButton = () => {
    setOnPopUp(false);
    setIsOn(true);
  };

  const onClickRightButton = async () => {
    setOnPopUp(false);
    setIsOn(false);

    await patchStatus(1, '영업 준비 중');
    setStoreStatus();
  };

  const setStoreStatus = async () => {
    const storeStatus = await getStatus(1);

    if (storeStatus === '영업 준비 중') setIsOn(false);
    else setIsOn(true);
  };

  useEffect(() => {
    getToggleValue(isOn);
  }, [getToggleValue, isOn]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="relative mr-5 inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isOn}
            readOnly
          />
          <div
            onClick={onClickToggleSwitch}
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
          leftBtnClick={onClickLeftButton}
          rightBtnClick={onClickRightButton}
        />
      )}
    </div>
  );
};

export default ToggleSwitch;
