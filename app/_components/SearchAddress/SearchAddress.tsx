import DaumPostcode, { Address } from 'react-daum-postcode';

type propsType = {
  getAddress: (address: string) => void;
};

const SearchAddress = ({ getAddress }: propsType) => {
  const handleComplete = (data: Address) => {
    getAddress(data.address);
  };

  return (
    <DaumPostcode
      className="fixed left-0 top-0"
      style={{ width: '100vw', height: '100vh', zIndex: '500' }}
      autoClose
      onComplete={handleComplete}
    />
  );
};

export default SearchAddress;
