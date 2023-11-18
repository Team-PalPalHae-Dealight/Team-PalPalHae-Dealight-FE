const Input = ({
  name,
  props,
  condition,
}: {
  name: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  condition: boolean;
}) => {
  return (
    <label>
      <div className="text-xs">{name}</div>
      <div className="h-12  rounded  border-white bg-white">
        <input
          {...props}
          className={`h-12 w-full rounded bg-white  p-3 focus:border-transparent  focus:outline-none focus:ring-2 ${
            condition ? 'focus:ring-yellow' : 'focus:ring-'
          }`}
        />
      </div>
    </label>
  );
};
export default Input;
