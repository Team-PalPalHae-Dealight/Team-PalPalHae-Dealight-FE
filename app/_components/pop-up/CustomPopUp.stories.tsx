import type { Meta, StoryObj } from '@storybook/react';
import CustomPopUp from './CustomPopUp';

const meta: Meta<typeof CustomPopUp> = {
  title: 'Components/CustomPopUp',
  component: CustomPopUp,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomPopUp>;

export const Primary: Story = {
  render: () => (
    <CustomPopUp
      mainText="본인이 등록한 업체의 상품은 장바구니에 담을 수 없습니다."
      btnText="다른 상품 둘러보기"
      btnClick={() => {}}
    />
  ),
};
