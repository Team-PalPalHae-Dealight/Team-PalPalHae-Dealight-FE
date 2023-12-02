import type { Meta, StoryObj } from '@storybook/react';
import ItemCard from './ItemCard';

const meta: Meta<typeof ItemCard> = {
  title: 'Components/ItemCard',
  component: ItemCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ItemCard>;

export const Primary: Story = {
  args: {
    itemId: 1,
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMWFRUXGBUVGBgYGBgaGRkaGhcYFxgXGRgYHSggGBolGxcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS4tLS0vLS0vNS0vLS01LS0vLTUtLy8tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLf/AABEIAM0A9gMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EAEAQAAEDAgQDBgQDBgUDBQAAAAEAAgMEEQUSITEGQVETImFxgZEyobHRQsHwFCNSYnLhFTOCkqIWQ7IHU5PC8f/EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EADQRAAEDAgQEBAUEAgMBAAAAAAEAAgMRIQQSMUETUWFxIoGRoTKxwdHwFCPh8UJSBWKycv/aAAwDAQACEQMRAD8A/cUREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREXwqNLWxN+J7R6hQ5wbqaKQCbBSkUOLEYnXIeLAXJ209VzrK7K0Ojb2l+h+yq/URlhe01H/XxdNq1XXDdWlPWysEVBJidRyja2+19/mVHrOI2tYY3uLJbbtbcC+x36Kn9czdrgObmloPQZqXVrMM95oyhPS/yWnRYIcQTAgMmMg/paNene1U+HEquQghoA2uCLedgdVXH/AMiySzWur0APuCQrn4CRl3Ob6kfMArXIsQ7FcWY55/Z43sucuoBsOd8w5eC8s4yqR8VFfrlePla60nEMb8Vu6gYCV3wFp7Ob91uUUajqRIxrxpmANjuLi9j4hdO1bmy3Ga17c7dVdULGQRZdUXxfVKhERERERERERERERERERERERERERERF8VfiWKRwjvHvHZo3Pj5LO1Ne6V1swufhB2BPhy81gxX/ACDIHZAMzjtprpU6Cvmb6LTDhnyDNoOancW49LStY6KndNcuzEZrMAF7nK07+mxWY/61xOQfuqIDzDjbzuQrh+FPcP39SAByzff7KBilLZmWjqCJLgkX+MWIy3todfIqs4mXOM4DByLm1J2AHf8ArQHfBFhw0NoHH/aj6ef9DrzUqkraqany1REL899ANW9CATbXx5LtQ0EL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wUjdL9ltbiIn627qnbWLu2rCjT4FWR/HTSf6W5x/wuq6abIbPBaejgWn2Kocx7dVZladFcftDCvRnaqD9rHVfRVDqufEp4SvWuZvovUkjRY2VAaxvX5ry7ERtf5qRVRwloX1LQuLq0KtgZLJ/lxSP/pY530CsIeH61/w00n+oBn/AJkLvhvdoFzRjdT7hfRXLxNVEqzpOBq5x7wjjH8z7n2YCPmriD/09P8A3Kk+TWAfMk/RWDCSu2UcaJu6xxk6r3SwySG0UbpDtZrSfe23qv0ih4OpI9SwyHrIc3/EWb8lexxNaAGgADYAWA9AtDMAf8iqnYwD4R9F+f4ZwPM+zpnCIfwjvP8Af4W/NbPCcGhpxaNup3cdXHzJ+g0Vki3RwMj+EX5rJJM9+pRERWqpERERERERERERERERERERERERERERERERF5c0HQi69IiKFJhcDtTDEfNjT+S8/wCD03/sRf8Axs+ynooolSojMNhG0UY8mN+y7siaNmgeQC6IpRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERf/2Q==',
    title: '달콤한 도너츠',
    price: 1500,
    stock: 3,
    count: 2,
  },
};

Primary.argTypes = {
  image: {
    control: 'text',
  },
  title: {
    control: 'text',
  },
  price: {
    control: {
      type: 'number',
      min: 0,
    },
  },
  stock: {
    control: {
      type: 'number',
      min: 0,
    },
  },
  count: {
    control: {
      type: 'number',
      min: 0,
    },
  },
};
