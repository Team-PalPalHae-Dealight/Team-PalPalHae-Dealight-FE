'use client';

import ToggleSwitch from '@/app/_components/toggle-switch/ToggleSwitch';
import { useState } from 'react';

const BusinessStatus = () => {
  const [isOff, setIsOff] = useState(true);

  const getBusinessStatus = (toggle: boolean) => {
    setIsOff(toggle);
    /** @todo 영업 상태 변경 api 연결 추가 */
  };

  return (
    <div className="flex h-11 w-full items-center justify-between rounded bg-white shadow-sm">
      <div className="flex items-center gap-x-1.5 pl-3">
        <div
          className={`h-4 w-4 rounded-full ${!isOff ? 'bg-cyan' : 'bg-red'}`}
        />
        <div className="text-sm font-semibold text-black">
          {!isOff ? '영업 중' : '영업 준비 중'}
        </div>
      </div>
      <ToggleSwitch getToggleValue={getBusinessStatus} />
    </div>
  );
};

export default BusinessStatus;
