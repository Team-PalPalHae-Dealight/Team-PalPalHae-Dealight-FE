import type { Meta, StoryObj } from '@storybook/react';
import StoreFooter from './StoreFooter';

const meta: Meta<typeof StoreFooter> = {
  title: 'Components/StoreFooter',
  component: StoreFooter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StoreFooter>;

export const Primary: Story = {
  render: () => (
    <div className="fixed bottom-0 h-16 w-full">
      <StoreFooter />
    </div>
  ),
};
