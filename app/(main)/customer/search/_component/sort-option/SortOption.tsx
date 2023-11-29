import React from 'react';
import OrderListDropDown from '../order-list-Dropdown/SortlistDropdown';
type SortPropsType = {
  getsortOption: (val: string) => void;
  sortBy: string;
};

const Sortoption = ({ getsortOption, sortBy }: SortPropsType) => {
  return (
    <div className="my-3 flex w-full flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-3">
        <div className="text-xl font-semibold">검색 결과</div>
        {sortBy === 'distance' ? (
          <div className="text-xs  font-semibold">반경 3km</div>
        ) : null}
      </div>
      <OrderListDropDown getsortOption={getsortOption} />
    </div>
  );
};

export default Sortoption;
