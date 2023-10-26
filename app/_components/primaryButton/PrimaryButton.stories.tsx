import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Large: Story = {
  render: () => (
    <PrimaryButton
      to="/"
      size="large"
      onClick={() => console.log('clicked')}
      buttonText="버튼"
    />
  ),
};

export const Small: Story = {
  render: () => (
    <PrimaryButton
      size="small"
      to="/"
      buttonText="버튼"
      onClick={() => console.log('clicked')}
    />
  ),
};
