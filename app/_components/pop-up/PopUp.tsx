type PopUpPropsType = {
  mainText: string;
  subText?: string;
  leftBtnText: string;
  leftBtnClick: React.MouseEventHandler<HTMLButtonElement>;
  rightBtnText: string;
  rightBtnClick: React.MouseEventHandler<HTMLButtonElement>;
};

const PopUp = ({
  mainText,
  subText,
  leftBtnText,
  leftBtnClick,
  rightBtnText,
  rightBtnClick,
}: PopUpPropsType) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="flex w-60 flex-col items-center rounded bg-white">
        <div className="flex w-full flex-col items-center justify-center p-6 text-center text-sm">
          <div className="font-semibold">{mainText}</div>
          {subText && (
            <div className="mt-3 text-xs text-dark-gray">{subText}</div>
          )}
        </div>
        <div className="flex w-full border-t-1 border-dark-gray text-sm">
          <button
            className="w-full rounded-bl px-4 py-3 active:bg-yellow"
            onClick={leftBtnClick}
          >
            {leftBtnText}
          </button>
          <button
            className="w-full rounded-br border-l-1 border-dark-gray px-4 py-3 active:bg-yellow"
            onClick={rightBtnClick}
          >
            {rightBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
