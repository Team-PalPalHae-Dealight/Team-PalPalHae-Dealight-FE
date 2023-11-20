import type { Meta, StoryObj } from '@storybook/react';
import OrderResult from './OrderResult';

const meta: Meta<typeof OrderResult> = {
  title: 'Components/OrderResult',
  component: OrderResult,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OrderResult>;

export const Primary: Story = {
  args: {
    data: {
      storeName: '행복도너츠가게',
      totalCount: '4',
      totalPrice: '11000',
      arriveTime: '17 : 32',
      useName: '에프와 오프',
      comments: '빨리 갈께요!',
    },
  },
};

Primary.argTypes = {
  data: {
    storeName: {
      control: 'text',
    },
    totalCount: {
      control: 'text',
    },
    totalPrice: {
      control: 'text',
    },
    arriveTime: {
      control: 'text',
    },
    useName: {
      control: 'text',
    },
    comments: {
      control: 'text',
    },
  },
};
