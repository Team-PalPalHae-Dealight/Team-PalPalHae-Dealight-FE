import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
const NicknameInput = ({
  nameProp,
  props,
}: {
  nameProp: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <label>
      <div>{nameProp}</div>
      <div className="flex flex-row ">
        <div className="h-12 w-9/12 rounded-l border-white bg-white">
          <input {...props} className="h-12 rounded-l border-white bg-white" />
        </div>
        <div className=" ml-1 w-3/12">
          <PrimaryButton type="submit" onClick={() => console.log(true)}>
            중복확인
          </PrimaryButton>
        </div>
      </div>
    </label>
  );
};
export default NicknameInput;
