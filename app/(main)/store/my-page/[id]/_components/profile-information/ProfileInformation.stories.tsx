import type { Meta, StoryObj } from '@storybook/react';
import ProfileInformation from './ProfileInformation';

const meta: Meta<typeof ProfileInformation> = {
  title: 'Components/ProfileInformation',
  component: ProfileInformation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileInformation>;

export const Primary: Story = {
  render: () => <ProfileInformation />,
};
