import type { Meta, StoryObj } from '@storybook/react';
import StoreTimeForm from './StoreTimeForm';

const meta: Meta<typeof StoreTimeForm> = {
  title: 'Components/StoreTimeForm',
  component: StoreTimeForm,
};

export default meta;
type Story = StoryObj<typeof StoreTimeForm>;

export const Primary: Story = {
  render: () => (
    <main className="mx-auto flex min-h-screen max-w-[375px] flex-col items-center px-5">
      <StoreTimeForm />
    </main>
  ),
};
