import type { Meta, StoryObj } from '@storybook/react';
import ImageUploader from './ImageUploader';

const meta: Meta<typeof ImageUploader> = {
  title: 'Components/ImageUploader',
  component: ImageUploader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageUploader>;

export const Primary: Story = {
  render: () => <ImageUploader storeImage="https://picsum.photos/200/200" />,
};
