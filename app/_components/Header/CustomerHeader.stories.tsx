import { AddressProvider } from '@/app/_providers/AddressProvider';
import type { Meta, StoryObj } from '@storybook/react';
import CustomerHeader from './CustomerHeader';

const meta: Meta<typeof CustomerHeader> = {
  title: 'Components/CustomerHeader',
  component: CustomerHeader,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <AddressProvider>
        <Story />
      </AddressProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CustomerHeader>;

export const Primary: Story = {
  render: () => <CustomerHeader />,
};
