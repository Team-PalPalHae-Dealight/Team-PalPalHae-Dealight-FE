import type { Meta, StoryObj } from '@storybook/react';
import InfiniteScrollList from './InfiniteScrollList';
import fetchData from './fetchData';
import Items from './Items';

const meta: Meta<typeof InfiniteScrollList> = {
  title: 'Components/InfiniteScrollList',
  component: InfiniteScrollList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InfiniteScrollList>;

export const Primary: Story = {
  render: () => (
    <InfiniteScrollList
      fetchData={fetchData}
      emptyWord={'더 이상 불러올 내용이 없습니다.'}
    >
      <Items />
    </InfiniteScrollList>
  ),
};
