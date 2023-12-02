import { useState } from 'react';
import SearchAddress from '../SearchAddress/SearchAddress';
import { useAuth } from '@/app/_providers/AuthProvider';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';

type AddressButtonPropsType = {
  getAddress: (address: string) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddressButton = ({
  getAddress,
  children,
  className,
}: AddressButtonPropsType) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
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
          loggedIn === true
            ? setOpen(prev => !prev)
            : router.push(pageRoute.customer.login())
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
