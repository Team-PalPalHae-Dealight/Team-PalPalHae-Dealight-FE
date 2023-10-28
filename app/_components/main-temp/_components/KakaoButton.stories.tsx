import type { Meta, StoryObj } from '@storybook/react';
import KakaoButton from './KakaoButton';

const meta: Meta<typeof KakaoButton> = {
  title: 'Components/KakaoButton',
  component: KakaoButton,
};

export default meta;
type Story = StoryObj<typeof KakaoButton>;

export const Primary: Story = {
  render: () => <KakaoButton />,
};
