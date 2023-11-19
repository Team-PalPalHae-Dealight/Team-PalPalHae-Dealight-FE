import type { Meta, StoryObj } from '@storybook/react';
import StoreNumForm from './StoreNumForm';

const meta: Meta<typeof StoreNumForm> = {
  title: 'Forms/StoreNumForm',
  component: StoreNumForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StoreNumForm>;

export const Primary: Story = {
  render: () => (
    <main className="mx-auto flex min-h-screen max-w-[375px] flex-col items-center px-5">
      <StoreNumForm />
    </main>
  ),
};
