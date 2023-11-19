import type { Meta, StoryObj } from '@storybook/react';
import StoreInfoForm from './StoreInfoForm';

const meta: Meta<typeof StoreInfoForm> = {
  title: 'Forms/StoreInfoForm',
  component: StoreInfoForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StoreInfoForm>;

export const Primary: Story = {
  render: () => (
    <main className="mx-auto flex min-h-screen max-w-[375px] flex-col items-center px-5">
      <StoreInfoForm />
    </main>
  ),
};
