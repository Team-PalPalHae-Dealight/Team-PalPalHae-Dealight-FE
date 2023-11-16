import type { Meta, StoryObj } from '@storybook/react';
import ItemRegister from './ItemRegister';

const meta: Meta<typeof ItemRegister> = {
  title: 'Components/ItemRegister',
  component: ItemRegister,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ItemRegister>;

export const Primary: Story = {
  render: () => <ItemRegister />,
};
