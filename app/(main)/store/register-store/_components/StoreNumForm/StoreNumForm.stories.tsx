import type { Meta, StoryObj } from '@storybook/react';
import StoreNumForm from './StoreNumForm';

const meta: Meta<typeof StoreNumForm> = {
  title: 'Components/StoreNumForm',
  component: StoreNumForm,
};

export default meta;
type Story = StoryObj<typeof StoreNumForm>;

export const Primary: Story = {
  render: () => (
    <main className="max-w-[375px]flex mx-auto min-h-screen flex-col items-center px-5">
      <StoreNumForm />
    </main>
  ),
};
