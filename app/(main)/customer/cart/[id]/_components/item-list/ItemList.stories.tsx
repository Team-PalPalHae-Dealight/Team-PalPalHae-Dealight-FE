import type { Meta, StoryObj } from '@storybook/react';
import ItemList from './ItemList';

const meta: Meta<typeof ItemList> = {
  title: 'Components/ItemList',
  component: ItemList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ItemList>;

export const Primary: Story = {
  render: () => <ItemList />,
};
