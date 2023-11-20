import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  render: () => <PrimaryButton onClick={() => 'clicked'}>버튼</PrimaryButton>,
};
