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
  render: () => <OrderInformation getInput={value => console.log(value)} />,
};
