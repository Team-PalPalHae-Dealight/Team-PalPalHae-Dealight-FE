import DaumPostcode, { Address } from 'react-daum-postcode';

type propsType = {
  getAddress: (address: string) => void;
  onClose: () => void;
};

const SearchAddress = ({ getAddress, onClose }: propsType) => {
  const handleComplete = (data: Address) => {
    getAddress(data.address);
  };

  return (
    <>
      <button
        onClick={onClose}
        className="fixed left-0 top-0 h-10 w-full border-b-1 border-b-black bg-light-gray text-center"
      >
        닫기
      </button>
      <DaumPostcode
        className="fixed left-0 top-10"
        style={{ width: '100vw', height: '100vh', zIndex: '500' }}
        autoClose
        onComplete={handleComplete}
      />
    </>
  );
};

export default SearchAddress;
