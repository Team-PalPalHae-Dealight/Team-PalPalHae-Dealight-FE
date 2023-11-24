'use client';

const ResetButton = () => {
  return (
    <button
      onClick={() => window.location.reload()}
      className="cursor-pointer text-xs text-dark-gray"
    >
      새로고침
    </button>
  );
};

export default ResetButton;
