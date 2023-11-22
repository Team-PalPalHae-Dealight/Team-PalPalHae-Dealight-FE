import type { Meta, StoryObj } from '@storybook/react';
import Signup from './Signup';

const meta: Meta<typeof Signup> = {
  title: 'Components/Signup',
  component: Signup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Signup>;

export const Primary: Story = {
  render: () => <Signup />,
};
