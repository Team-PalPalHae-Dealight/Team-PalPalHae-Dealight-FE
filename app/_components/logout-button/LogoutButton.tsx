'use client';

import PopUp from '@/app/_components/pop-up/PopUp';
import { useAuth } from '@/app/_providers/AuthProvider';
import { useState } from 'react';

const LogoutButton = () => {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
        className="mb-20 h-12 w-full rounded-md bg-light-gray text-base text-red"
        onClick={() => {
          setOpen(true);
        }}
      >
        로그아웃
      </button>
      {open && (
        <PopUp
          mainText="로그아웃하시겠습니까?"
          leftBtnText="예"
          leftBtnClick={() => {
            setOpen(false);
            logout();
          }}
          rightBtnText="아니요"
          rightBtnClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default LogoutButton;
