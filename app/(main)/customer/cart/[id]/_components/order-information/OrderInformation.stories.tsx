import type { Meta, StoryObj } from '@storybook/react';
import OrderInformation from './OrderInformation';

const meta: Meta<typeof OrderInformation> = {
  title: 'Components/OrderInformation',
  component: OrderInformation,
};

export default meta;
type Story = StoryObj<typeof OrderInformation>;

export const Primary: Story = {
  render: () => (
    <div className="h-screen max-w-[375px] bg-gray px-5">
      <OrderInformation getInput={value => console.log(value)} />
    </div>
  ),
};
