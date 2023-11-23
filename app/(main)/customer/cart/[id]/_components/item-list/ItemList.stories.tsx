import type { Meta, StoryObj } from '@storybook/react';
import ItemList from './ItemList';

const meta: Meta<typeof ItemList> = {
  title: 'Components/ItemList',
  component: ItemList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ItemList>;

export const Primary: Story = {
  render: () => (
    <ItemList
      data={[
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
      ]}
    />
  ),
};
