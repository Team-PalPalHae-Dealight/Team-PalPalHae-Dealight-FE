import type { Meta, StoryObj } from '@storybook/react';
import ItemDetailTemp from './ItemDetailTemp';

const meta: Meta<typeof ItemDetailTemp> = {
  title: 'Components/ItemDetailTemp',
  component: ItemDetailTemp,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ItemDetailTemp>;

export const Primary: Story = {
  render: () => (
    <main className="flex flex-col items-center px-5 pt-2.5">
      <ItemDetailTemp />
    </main>
  ),
};
