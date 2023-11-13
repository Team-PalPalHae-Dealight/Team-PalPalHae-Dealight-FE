import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Primary: Story = {
  render: () => <ToggleSwitch getToggleValue={toggle => console.log(toggle)} />,
};
