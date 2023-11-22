import type { Meta, StoryObj } from '@storybook/react';
import MyPageForm from './MyPageForm';

const meta: Meta<typeof MyPageForm> = {
  title: 'Forms/MyPageForm',
  component: MyPageForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyPageForm>;

export const Primary: Story = {
  render: () => <MyPageForm />,
};
