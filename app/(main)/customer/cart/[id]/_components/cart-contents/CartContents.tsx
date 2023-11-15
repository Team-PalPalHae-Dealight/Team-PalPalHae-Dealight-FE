'use client';

import Notification from '@/app/_components/notification/Notification';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import ItemList from '../item-list/ItemList';
import OrderInformation from '../order-information/OrderInformation';

const CartContent = ({ params }: { params: { slug: string } }) => {
  /** @todo api 연결로 data 받아오기 + 수정 params 이용 */
  const itemData = undefined;

  // eslint-disable-next-line
  const getInput = (value: any) => {
    // console.log(value);
    console.log(params);
  };

  return (
    <div className="grid grid-cols-1 gap-y-5 pb-5">
      <ItemList data={itemData} />
      {itemData ? (
        <>
          <OrderInformation getInput={getInput} />
          <Notification>
            해당 주문 상품의 재고가 부족할 경우 상품 주문이 취소될 수 있으며,
            주문 중에 해당 상품이 품절 처리될 수 있습니다.
          </Notification>
          <PrimaryButton onClick={() => {}}>주문하기</PrimaryButton>
        </>
      ) : null}
    </div>
  );
};

export default CartContent;