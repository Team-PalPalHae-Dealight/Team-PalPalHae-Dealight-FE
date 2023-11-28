import { twMerge } from 'tailwind-merge';

type PrimaryButtonPropsType = {
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = ({
  onClick,
  children,
  className,
  ...props
}: PrimaryButtonPropsType) => {
  const primaryButtonDefaultStyles = 'h-12 w-full rounded-md bg-yellow text-sm';

  const classNames = twMerge(primaryButtonDefaultStyles, className);

  return (
    <button
      className={classNames}
      onClick={onClick}
      style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
