import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  render: () => (
    <div className="fixed left-5 top-5 w-96">
      <PrimaryButton onClick={() => 'clicked'}>버튼</PrimaryButton>
    </div>
  ),
};
