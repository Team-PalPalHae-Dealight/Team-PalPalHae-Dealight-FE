import type { Meta, StoryObj } from '@storybook/react';
import OrderInformation from './OrderInformation';

const meta: Meta<typeof OrderInformation> = {
  title: 'Components/OrderInformation',
  component: OrderInformation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OrderInformation>;

export const Primary: Story = {
  args: {
    data: [
      {
        cartId: 123456789,
        itemId: 1,
        storeId: 1,
        memberProviderId: 1,
        itemName: '떡볶이',
        stock: 2,
        discountPrice: 3000,
        itemImage: 'https://fake-image.com/item1.png',
        quantity: 1,
        storeName: '먼분식',
        storeCloseTime: '23:30',
        expirationDateTime: '2023-11-23 23:30:00',
      },
      {
        cartId: 123456790,
        itemId: 2,
        storeId: 1,
        memberProviderId: 1,
        itemName: '김밥',
        stock: 3,
        discountPrice: 4000,
        itemImage: 'https://fake-image.com/item2.png',
        quantity: 1,
        storeName: '먼분식',
        storeCloseTime: '23:30',
        expirationDateTime: '2023-11-23 23:30:00',
      },
    ],
  },
};
