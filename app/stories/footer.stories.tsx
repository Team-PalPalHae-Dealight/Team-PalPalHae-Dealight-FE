import { Meta, StoryObj } from '@storybook/react';
import Footer from '../_components/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Example: Story = {
  render: () => <Footer />,
};
