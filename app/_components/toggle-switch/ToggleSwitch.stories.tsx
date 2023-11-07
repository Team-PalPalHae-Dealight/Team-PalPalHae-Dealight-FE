import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Primary: Story = {
  render: () => <ToggleSwitch handleClick={toggle => console.log(toggle)} />,
};
