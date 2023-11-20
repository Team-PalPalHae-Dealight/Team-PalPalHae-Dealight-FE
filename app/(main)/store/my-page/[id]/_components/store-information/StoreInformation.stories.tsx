import type { Meta, StoryObj } from '@storybook/react';
import StoreInformation from './StoreInformation';

const meta: Meta<typeof StoreInformation> = {
  title: 'Components/StoreInformation',
  component: StoreInformation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StoreInformation>;

export const Primary: Story = {
  render: () => <StoreInformation />,
};
