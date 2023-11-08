import LoadMoreItems from './LoadMoreItems';
import { ReactElement } from 'react';
import { ResponseItemTypes } from './fetchData';

export type InfiniteListPropType = {
  fetchData: (page: number) => Promise<ResponseItemTypes[] | null>;
  children: ReactElement | undefined;
};

const InfiniteScrollList = ({ fetchData, children }: InfiniteListPropType) => {
  return (
    <div className="container min-h-screen w-full">
      <LoadMoreItems fetchData={fetchData}>{children}</LoadMoreItems>
    </div>
  );
};

export default InfiniteScrollList;
