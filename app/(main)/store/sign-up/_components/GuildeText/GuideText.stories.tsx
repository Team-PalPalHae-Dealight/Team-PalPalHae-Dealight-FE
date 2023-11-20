import type { Meta, StoryObj } from '@storybook/react';
import GuideText from './GuideText';

const meta: Meta<typeof GuideText> = {
  title: 'Components/GuideText',
  component: GuideText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GuideText>;

export const Primary: Story = {
  render: () => <GuideText />,
};
