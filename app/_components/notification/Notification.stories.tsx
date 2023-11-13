import type { Meta, StoryObj } from '@storybook/react';
import Notification from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Primary: Story = {
  render: () => (
    <Notification>
      해당 주문 상품의 재고가 부족할 경우 상품 주문이 취소될 수 있으며, 주문
      중에 해당 상품이 품절 처리될 수 있습니다.
    </Notification>
  ),
};
