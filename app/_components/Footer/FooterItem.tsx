'use client';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

type FooterItemPropType = {
  iconPath: ReactElement;
  labelName: string;
  to: string;
};

const FooterItem = ({ iconPath, labelName, to }: FooterItemPropType) => {
  const router = useRouter();

  return (
    <div
      className="group flex cursor-pointer flex-col items-center justify-center"
      onClick={() => router.push(to)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#7D7D7D"
        className="h-6 w-full group-hover:stroke-[#FFE429]"
      >
        {iconPath}
      </svg>
      <label className="cursor-pointer group-hover:text-[#FFE429]">
        {labelName}
      </label>
    </div>
  );
};

export default FooterItem;
