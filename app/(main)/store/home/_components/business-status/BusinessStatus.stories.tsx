import type { Meta, StoryObj } from '@storybook/react';
import BusinessStatus from './BusinessStatus';

const meta: Meta<typeof BusinessStatus> = {
  title: 'Components/BusinessStatus',
  component: BusinessStatus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BusinessStatus>;

export const Primary: Story = {
  render: () => <BusinessStatus />,
};
