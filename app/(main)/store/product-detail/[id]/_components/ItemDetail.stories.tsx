import type { Meta, StoryObj } from '@storybook/react';
import ItemDetail from './ItemDetail';

const meta: Meta<typeof ItemDetail> = {
  title: 'Components/ItemDetail',
  component: ItemDetail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ItemDetail>;

export const Primary: Story = {
  render: () => (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <ItemDetail />
    </main>
  ),
};
