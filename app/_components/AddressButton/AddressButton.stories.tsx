import type { Meta, StoryObj } from '@storybook/react';
import AddressButton from './AddressButton';

const meta: Meta<typeof AddressButton> = {
  title: 'Buttons/AddressButton',
  component: AddressButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AddressButton>;

export const Primary: Story = {
  render: () => (
    <AddressButton
      className="rounded-md bg-gray"
      getAddress={address => alert(address)}
    >
      주소찾기
    </AddressButton>
  ),
};
