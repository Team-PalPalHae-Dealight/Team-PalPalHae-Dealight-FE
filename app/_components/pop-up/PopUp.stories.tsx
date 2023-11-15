import type { Meta, StoryObj } from '@storybook/react';
import PopUp from './PopUp';

const meta: Meta<typeof PopUp> = {
  title: 'Components/PopUp',
  component: PopUp,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PopUp>;

export const Primary: Story = {
  render: () => (
    <PopUp
      mainText={'장바구니에는 같은 업체의 상품만 담을 수 있습니다.'}
      subText={
        '선택하신 상품을 장바구니에 담을 경우 이전에 담은 상품이 삭제됩니다.'
      }
      leftBtnText={'취소'}
      rightBtnText={'담기'}
      leftBtnClick={() => console.log('leftBtnClick')}
      rightBtnClick={() => console.log('RightBtnClick')}
    />
  ),
};

export const MainText: Story = {
  render: () => (
    <PopUp
      mainText={'재고가 부족합니다.장바구니를 초기화시키겠습니까?'}
      leftBtnText={'취소'}
      rightBtnText={'초기화'}
      leftBtnClick={() => console.log('leftBtnClick')}
      rightBtnClick={() => console.log('RightBtnClick')}
    />
  ),
};
