import LoadMoreItems from './LoadMoreItems';
import { ReactElement } from 'react';
import { ResponseItemTypes } from './fetchData';

export type InfiniteListPropType = {
  fetchData: (page: number) => Promise<ResponseItemTypes[] | null>;
  children: ReactElement | undefined;
  isEmptyWord: string;
};

const InfiniteScrollList = ({
  fetchData,
  children,
  isEmptyWord,
}: InfiniteListPropType) => {
  return (
    <div className="min-h-screen w-full">
      <LoadMoreItems fetchData={fetchData} isEmptyWord={isEmptyWord}>
        {children}
      </LoadMoreItems>
    </div>
  );
};

export default InfiniteScrollList;
