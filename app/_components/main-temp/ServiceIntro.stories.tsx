import type { Meta, StoryObj } from '@storybook/react';
import ServiceIntro from './ServiceIntro';

const meta: Meta<typeof ServiceIntro> = {
  title: 'Components/ServiceIntro',
  component: ServiceIntro,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServiceIntro>;

export const Primary: Story = {
  render: () => <ServiceIntro />,
};
