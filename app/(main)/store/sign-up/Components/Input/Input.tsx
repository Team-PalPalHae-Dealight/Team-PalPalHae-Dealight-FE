const Input = ({
  nameProp,
  props,
}: {
  nameProp: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <label>
      <div className="text-xs">{nameProp}</div>
      <div className="h-12  rounded-l  border-white bg-white">
        <input
          {...props}
          className="h-12 w-full rounded-l border-white bg-white"
        />
      </div>
    </label>
  );
};
export default Input;
