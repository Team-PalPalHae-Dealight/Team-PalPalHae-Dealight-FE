import React, { ReactNode } from 'react';

type PrimaryButtonPropsType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const PrimaryButton = ({ onClick, children }: PrimaryButtonPropsType) => {
  return (
    <button
      className={'h-12 w-full rounded-md bg-yellow text-base text-black'}
      onClick={onClick}
      style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
