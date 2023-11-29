import { useState } from 'react';
import SearchAddress from '../SearchAddress/SearchAddress';
import { useAuth } from '@/app/_providers/AuthProvider';

type AddressButtonPropsType = {
  getAddress: (address: string) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddressButton = ({
  getAddress,
  children,
  className,
}: AddressButtonPropsType) => {
  const [open, setOpen] = useState(false);
  const { loggedIn } = useAuth();
  const setData = (address: string) => {
    getAddress(address);
    setOpen(prev => !prev);
  };

  const onCLickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className={className}
        onClick={() =>
          loggedIn === true ? setOpen(prev => !prev) : alert('로그인 하십시오.')
        }
      >
        {children}
      </button>
      {open && (
        <div className="relative z-50 w-full">
          <SearchAddress getAddress={setData} onClose={onCLickClose} />
        </div>
      )}
    </>
  );
};

export default AddressButton;
