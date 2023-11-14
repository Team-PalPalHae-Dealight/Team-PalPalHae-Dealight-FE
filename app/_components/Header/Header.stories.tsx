import type { Meta, StoryObj } from '@storybook/react';
import CustomerHeader from './CustomerHeader';
const meta: Meta<typeof CustomerHeader> = {
  title: 'offStory/Header',
  component: CustomerHeader,
};

export default meta;
type Story = StoryObj<typeof CustomerHeader>;

export const Primary: Story = {
  render: () => <CustomerHeader />,
};
