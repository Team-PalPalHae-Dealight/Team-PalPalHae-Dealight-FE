import type { Meta, StoryObj } from '@storybook/react';
import Searchbar from './Searchbar';

const meta: Meta<typeof Searchbar> = {
  title: 'Components/Searchbar',
  component: Searchbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Searchbar>;

export const Primary: Story = {
  render: () => (
    <Searchbar getItems={() => console.log('hi')} sortOption="거리순" />
  ),
};
