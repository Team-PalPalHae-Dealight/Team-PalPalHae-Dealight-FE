import React from 'react';

type PrimaryButtonPropsType = {
  size: 'large' | 'small';
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton = ({
  size,
  buttonText,
  onClick,
}: PrimaryButtonPropsType) => {
  const primaryButtonSizes = {
    large: 'w-80 h-12',
    small: 'w-44 h-10',
  };

  return (
    <button
      className={`${primaryButtonSizes[size]} rounded-md bg-yellow text-black`}
      onClick={onClick}
      style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
