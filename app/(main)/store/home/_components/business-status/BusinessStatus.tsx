'use client';

import { Dispatch, SetStateAction } from 'react';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';

type BusinessStatusPropsType = {
  status: string;
  setStatus: Dispatch<SetStateAction<'영업 중' | '영업 준비 중'>>;
};

const BusinessStatus = ({ status, setStatus }: BusinessStatusPropsType) => {
  return (
    <div className="flex h-11 w-full items-center justify-between rounded bg-white shadow-sm">
      <div className="flex items-center gap-x-1.5 pl-3">
        <div
          className={`h-4 w-4 rounded-full ${
            status === '영업 중' ? 'bg-cyan' : 'bg-red'
          }`}
        />
        <div className="text-sm font-semibold text-black">{status}</div>
      </div>
      <ToggleSwitch status={status} setStatus={setStatus} />
    </div>
  );
};

export default BusinessStatus;
