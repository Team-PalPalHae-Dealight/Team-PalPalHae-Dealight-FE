import LoadMoreItems from './LoadMoreItems';
import { ReactElement } from 'react';
import { ResponseItemTypes } from './fetchData';

export type InfiniteListPropsType = {
  fetchData: (page: number) => Promise<ResponseItemTypes[] | null>;
  children: ReactElement;
  emptyWord: string;
};

const InfiniteScrollList = ({
  fetchData,
  children,
  emptyWord,
}: InfiniteListPropsType) => {
  return (
    <div className="container min-h-screen w-full">
      <LoadMoreItems fetchData={fetchData} emptyWord={emptyWord}>
        {children}
      </LoadMoreItems>
    </div>
  );
};

export default InfiniteScrollList;
