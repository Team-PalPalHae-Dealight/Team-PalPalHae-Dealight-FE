import type { Meta, StoryObj } from "@storybook/react";

import Temp from "./Temp";

const meta: Meta<typeof Temp> = {
  component: Temp,
};

export default meta;
type Story = StoryObj<typeof Temp>;

export const Primary: Story = {
  render: () => <Temp />,
};
