import React from 'react';
import DaumPostcode from 'react-daum-postcode';

// eslint-disable-next-line
const Postcode = (props: any) => {
  // eslint-disable-next-line
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    props.setAdress(fullAddress);

    /**
     * @todo 위도 경도 구하는 작업 연결
     */
  };

  return (
    <DaumPostcode
      className="fixed left-0 top-0 h-screen w-full"
      autoClose
      onComplete={handleComplete}
      {...props}
    />
  );
};

export default Postcode;
