import type { Meta, StoryObj } from '@storybook/react';
import RegisterModal from './RegisterModal';

const meta: Meta<typeof RegisterModal> = {
  title: 'Components/RegisterModal',
  component: RegisterModal,
};

export default meta;
type Story = StoryObj<typeof RegisterModal>;

export const Primary: Story = {
  render: () => <RegisterModal />,
};
