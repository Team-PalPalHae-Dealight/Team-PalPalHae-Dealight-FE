import type { Meta, StoryObj } from '@storybook/react';
import NicknameInput from './NicknameInput';

const meta: Meta<typeof NicknameInput> = {
  title: 'Components/NicknameInput',
  component: NicknameInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NicknameInput>;

export const Primary: Story = {
  render: () => (
    <NicknameInput nameProp="닉네임" handleClick={() => console.log('hi')} />
  ),
};
