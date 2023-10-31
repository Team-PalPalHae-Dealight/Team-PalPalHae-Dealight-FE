import DaumPostcode, { Address } from 'react-daum-postcode';

type propsType = {
  getAddress: (address: string) => void;
};

const SearchAddress = ({ getAddress }: propsType) => {
  const handleComplete = (data: Address) => {
    getAddress(data.address);

    /**
     * @todo 위도 경도 구하는 작업 연결
     */
  };

  return (
    <DaumPostcode
      className="fixed left-0 top-0"
      style={{ width: '100vw', height: '100vh' }}
      autoClose
      onComplete={handleComplete}
    />
  );
};

export default SearchAddress;
