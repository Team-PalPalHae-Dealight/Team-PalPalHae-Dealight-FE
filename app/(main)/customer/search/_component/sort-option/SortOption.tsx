import React from 'react';
import OrderListDropDown from '../order-list-Dropdown/SortlistDropdown';
import QuestionMark from 'app/(main)/customer/search/_component/assets/questionmark.svg';

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
          <div className="flex  flex-row items-center">
            <QuestionMark className="mt-2 h-5  w-5 " />
            <div className="gray text-xs font-semibold text-dark-gray">
              반경 3km
            </div>
          </div>
        ) : null}
      </div>
      <OrderListDropDown getsortOption={getsortOption} />
    </div>
  );
};

export default Sortoption;
