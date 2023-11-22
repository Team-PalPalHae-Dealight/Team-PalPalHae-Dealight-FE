import type { Meta, StoryObj } from '@storybook/react';
import StoreTimeForm from './StoreTimeForm';

const meta: Meta<typeof StoreTimeForm> = {
  title: 'Forms/StoreTimeForm',
  component: StoreTimeForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StoreTimeForm>;

export const Primary: Story = {
  render: () => (
    <div className="mx-auto flex min-h-screen max-w-[375px] flex-col items-center px-5">
      <StoreTimeForm />
    </div>
  ),
};
