'use client';

import Notification from '@/app/_components/notification/Notification';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import ItemList from '../item-list/ItemList';
import OrderInformation from '../order-information/OrderInformation';
import { CartType } from '../../_types/CartType';
import { Dispatch, SetStateAction, useState } from 'react';
import { sumTotalPrice } from '../../_utils/sumTotalPrice';
import { postOrder } from '../../_services/postOrder';
import PopUp from '@/app/_components/pop-up/PopUp';
import { clearCart } from '../../_services/clearCart';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';
import { FormProvider, useForm } from 'react-hook-form';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';

type CartContentPropsType = {
  data: CartType[] | undefined;
  setData: Dispatch<SetStateAction<CartType[] | undefined>>;
};

type InputType = {
  arriveTime: string;
  request: string;
};

const CartContent = ({ data, setData }: CartContentPropsType) => {
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorOrder, setErrorOrder] = useState(false);
  const [orderId, setOrderId] = useState<number>();
  const [message, setMessage] = useState('');

  const router = useRouter();
  const { providerId } = useUserInfo();
  const methods = useForm<InputType>();

  const submitOrder = async () => {
    const { arriveTime, request } = methods.watch();

    const itemList = data?.map(item => {
      return {
        itemId: item.itemId,
        quantity: item.quantity,
      };
    });

    const res = await postOrder({
      req: {
        orderProductsReq: {
          orderProducts: itemList,
        },
        storeId: data ? data[0].storeId : 0,
        demand: request,
        arrivalTime: `${arriveTime}:00`,
        totalPrice: sumTotalPrice({ data }).totalPrice,
      },
    });

    if (res.status === 201 || res.status === 200) {
      setOpen(true);
      setOrderId(res.orderId);
    } else {
      if (res.data.code === 'OR002') {
        setErrorOrder(true);
      } else {
        setError(true);
      }
      setMessage(res.data.message);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-y-5 pb-5">
      <ItemList data={data} setData={setData} />
      {data?.length ? (
        <>
          <FormProvider {...methods}>
            <form>
              <OrderInformation data={data} />
            </form>
          </FormProvider>
          <Notification>
            해당 주문 상품의 재고가 부족할 경우 상품 주문이 취소될 수 있으며,
            주문 중에 해당 상품이 품절 처리될 수 있습니다.
          </Notification>
          <PrimaryButton className="mb-20" onClick={submitOrder}>
            주문하기
          </PrimaryButton>
        </>
      ) : (
        <div className="flex h-122 items-center justify-center text-xs text-dark-gray">
          상품이 없습니다
        </div>
      )}
      {error && (
        <PopUp
          mainText={message}
          leftBtnText="취소"
          leftBtnClick={() => {
            setError(false);
            window.location.reload();
          }}
          rightBtnText="초기화"
          rightBtnClick={async () => {
            await clearCart();
            setError(false);
          }}
        />
      )}
      {open && (
        <CustomPopUp
          mainText="주문이 정상적으로 완료되었습니다."
          subText="업체에서 주문 접수를 하기까지 잠시만 기다려주세요."
          btnText="확인"
          btnClick={() => {
            orderId
              ? router.push(pageRoute.customer.orderDetail(String(orderId)))
              : router.push(pageRoute.customer.orderList(String(providerId)));
          }}
        />
      )}
      {errorOrder && (
        <CustomPopUp
          mainText={message}
          btnText="확인"
          btnClick={() => setErrorOrder(false)}
        />
      )}
    </div>
  );
};

export default CartContent;
