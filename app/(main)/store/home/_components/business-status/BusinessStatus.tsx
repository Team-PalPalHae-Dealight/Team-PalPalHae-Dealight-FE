'use client';

import ToggleSwitch from '../toggle-switch/ToggleSwitch';

type BusinessStatusPropsType = {
  status: string;
};

const BusinessStatus = ({ status }: BusinessStatusPropsType) => {
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
      <ToggleSwitch status={status} />
    </div>
  );
};

export default BusinessStatus;
