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
    <div className="fixed left-5 top-5">
      <PrimaryButton
        to="/"
        size="large"
        onClick={() => console.log('clicked')}
        buttonText="버튼"
      />
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <div className="fixed left-5 top-5">
      <PrimaryButton
        size="small"
        to="/"
        buttonText="버튼"
        onClick={() => console.log('clicked')}
      />
    </div>
  ),
};
