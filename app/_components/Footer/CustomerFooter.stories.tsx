import type { Meta, StoryObj } from '@storybook/react';
import CustomerFooter from './CustomerFooter';

const meta: Meta<typeof CustomerFooter> = {
  title: 'Components/CustomerFooter',
  component: CustomerFooter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomerFooter>;

export const Primary: Story = {
  render: () => (
    <div className="fixed bottom-0 h-16 w-full">
      <CustomerFooter />
    </div>
  ),
};
