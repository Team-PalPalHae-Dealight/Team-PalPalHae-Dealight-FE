import type { Meta, StoryObj } from '@storybook/react';
import OrderListModal from './OrderListModal';

const meta: Meta<typeof OrderListModal> = {
  title: 'Modals/OrderListModal',
  component: OrderListModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OrderListModal>;

export const Primary: Story = {
  render: () => <OrderListModal onClose={() => console.log('modal')} />,
};
