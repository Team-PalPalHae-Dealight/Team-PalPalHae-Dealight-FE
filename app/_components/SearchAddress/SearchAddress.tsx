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
    <div className="fixed left-0 top-0 z-50 flex w-full flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="z-auto h-10 w-full max-w-[480px] border-b-1 border-b-black bg-light-gray text-center"
      >
        닫기
      </button>
      <DaumPostcode
        className="w-full max-w-[480px]"
        style={{ width: '100vw', height: '100vh', zIndex: '500' }}
        autoClose
        onComplete={handleComplete}
      />
    </div>
  );
};

export default SearchAddress;
