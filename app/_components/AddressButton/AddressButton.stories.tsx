import type { Meta, StoryObj } from '@storybook/react';
import AddressButton from './AddressButton';

const meta: Meta<typeof AddressButton> = {
  title: 'Components/AddressButton',
  component: AddressButton,
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
