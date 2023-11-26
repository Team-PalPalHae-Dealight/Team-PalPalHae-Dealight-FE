import React from 'react';
import OrderListDropDown from '../order-list-Dropdown/SortlistDropdown';
type SortPropsType = {
  getsortOption: (val: string) => void;
};

const Sortoption = ({ getsortOption }: SortPropsType) => {
  return (
    <div className="my-3 flex w-full flex-row items-center justify-between">
      <div className="text-xl font-semibold">검색 결과</div>
      <OrderListDropDown getsortOption={getsortOption} />
    </div>
  );
};

export default Sortoption;
