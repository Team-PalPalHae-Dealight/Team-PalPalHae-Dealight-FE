'use client';

import { useState } from 'react';

type ToggleSwitchPropsType = {
  handleClick: (toggle: boolean) => void;
};

const ToggleSwitch = ({ handleClick }: ToggleSwitchPropsType) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(prev => !prev);
    handleClick(isOn);
  };

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
            onClick={handleToggleSwitch}
            className="peer h-6 w-11 rounded-full bg-dark-gray  after:absolute  after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-dark-gray after:bg-white after:transition-all after:content-[''] peer-checked:bg-cyan peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-cyan"
          ></div>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
