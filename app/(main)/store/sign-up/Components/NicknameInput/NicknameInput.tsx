import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';

const NicknameInput = ({
  nameProp,
  registerProp,
  handleClick,
}: {
  nameProp: string;
  registerProp?: React.InputHTMLAttributes<HTMLInputElement>;
  handleClick: () => void;
}) => {
  const CheckNickname = () => {
    handleClick();
  };
  return (
    <label>
      <div className="text-xs">{nameProp}</div>
      <div className="flex flex-row ">
        <div className="h-12 w-9/12 rounded-l border-white bg-white">
          <input
            {...registerProp}
            className="h-12 w-full rounded-l border-white bg-white"
          />
        </div>
        <div className=" ml-1 w-3/12">
          <PrimaryButton type="submit" onClick={CheckNickname}>
            중복확인
          </PrimaryButton>
        </div>
      </div>
    </label>
  );
};
export default NicknameInput;
