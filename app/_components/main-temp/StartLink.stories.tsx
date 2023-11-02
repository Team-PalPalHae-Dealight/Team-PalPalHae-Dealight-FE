import type { Meta, StoryObj } from '@storybook/react';
import StartLink from './StartLink';

const meta: Meta<typeof StartLink> = {
  title: 'Components/StartLink',
  component: StartLink,
};

export default meta;
type Story = StoryObj<typeof StartLink>;

export const Primary: Story = {
  render: () => <StartLink />,
};
