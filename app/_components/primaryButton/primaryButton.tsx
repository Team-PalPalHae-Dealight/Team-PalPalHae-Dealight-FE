import Link from 'next/link';
import React from 'react';

type PrimaryButtonPropType = {
  to: string;
  size: string;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton = ({
  to,
  size,
  buttonText,
  onClick,
}: PrimaryButtonPropType) => {
  const { width, height } = {
    width: size === 'large' ? '80' : '44',
    height: size === 'large' ? '12' : '10',
  };

  return (
    <Link href={to}>
      <button
        className={`h-${height} w-${width} rounded-md bg-[#FFE429] text-[black]`}
        onClick={onClick}
        style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default PrimaryButton;
