import type { Meta, StoryObj } from '@storybook/react';
import MyPageContents from './MyPageContents';

const meta: Meta<typeof MyPageContents> = {
  title: 'Components/MyPageContents',
  component: MyPageContents,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyPageContents>;

export const Primary: Story = {
  render: () => <MyPageContents />,
};
