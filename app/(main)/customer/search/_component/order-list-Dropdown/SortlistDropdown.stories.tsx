import type { Meta, StoryObj } from '@storybook/react';
import SortlistDropdown from './SortlistDropdown';

const meta: Meta<typeof SortlistDropdown> = {
  title: 'Components/SortlistDropdown',
  component: SortlistDropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SortlistDropdown>;

export const Primary: Story = {
  render: () => <SortlistDropdown getsortOption={() => console.log('hi')} />,
};
