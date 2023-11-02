import { useState } from 'react';
import SearchAddress from '../SearchAddress/SearchAddress';

type propsType = {
  getAddress: (address: string) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddressButton = ({ getAddress, children, className }: propsType) => {
  const [open, setOpen] = useState(false);

  const setData = (address: string) => {
    getAddress(address);
    setOpen(prev => !prev);
  };

  return (
    <>
      <button className={className} onClick={() => setOpen(prev => !prev)}>
        {children}
      </button>
      {open && (
        <div>
          <SearchAddress getAddress={setData} />
        </div>
      )}
    </>
  );
};

export default AddressButton;
