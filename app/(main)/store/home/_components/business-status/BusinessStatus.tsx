'use client';

import ToggleSwitch from '@/app/_components/toggle-switch/ToggleSwitch';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type BusinessStatusPropsType = {
  setStatus: Dispatch<SetStateAction<'영업 중' | '영업 준비 중'>>;
};

const BusinessStatus = ({ setStatus }: BusinessStatusPropsType) => {
  const [isOn, setIsOn] = useState(false);

  const getBusinessStatus = (toggle: boolean) => {
    setIsOn(toggle);
  };

  useEffect(() => {
    getBusinessStatus(isOn);
  }, [isOn]);

  return (
    <div className="flex h-11 w-full items-center justify-between rounded bg-white shadow-sm">
      <div className="flex items-center gap-x-1.5 pl-3">
        <div
          className={`h-4 w-4 rounded-full ${isOn ? 'bg-cyan' : 'bg-red'}`}
        />
        <div className="text-sm font-semibold text-black">
          {isOn ? '영업 중' : '영업 준비 중'}
        </div>
      </div>
      <ToggleSwitch getToggleValue={getBusinessStatus} setStatus={setStatus} />
    </div>
  );
};

export default BusinessStatus;
