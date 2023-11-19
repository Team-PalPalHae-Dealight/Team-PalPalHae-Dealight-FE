'use client';

const LogoutButton = () => {
  return (
    <button
      className="h-12 w-full rounded-md bg-light-gray text-base text-red"
      onClick={() => console.log('로그아웃')}
      style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
