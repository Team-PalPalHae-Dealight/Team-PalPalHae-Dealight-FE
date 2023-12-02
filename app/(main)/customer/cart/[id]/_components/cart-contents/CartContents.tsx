'use client';

import Notification from '@/app/_components/notification/Notification';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import ItemList from '../item-list/ItemList';
import OrderInformation from '../order-information/OrderInformation';
import { useState } from 'react';
import { sumTotalPrice } from '../../_utils/sumTotalPrice';
import { postOrder } from '../../_services/postOrder';
import PopUp from '@/app/_components/pop-up/PopUp';
import { clearCart } from '../../_services/clearCart';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';
import { useRouter } from 'next/navigation';
import pageRoute from '@/app/_constants/path';
import { FormProvider, useForm } from 'react-hook-form';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
//import { testOrder } from '@/app/_hooks/query/order';
import { useGetCart } from '@/app/_hooks/query/cart';

type InputType = {
  arriveTime: string;
  request: string;
};

const CartContent = () => {
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorOrder, setErrorOrder] = useState(false);
  const [orderId, setOrderId] = useState<number>();
  const [message, setMessage] = useState('');

  const router = useRouter();
  const { providerId } = useUserInfo();
  const methods = useForm<InputType>();

  const { data: data } = useGetCart();

  const submitOrder = async () => {
    const { arriveTime, request } = methods.watch();

    // await testOrder({
    //   order: {
    //     orderProductsReq: {
    //       orderProducts: [
    //         {
    //           itemId: 1,
    //           quantity: 3,
    //         },
    //       ],
    //     },
    //     storeId: 1,
    //     demand: request,
    //     arrivalTime: arriveTime,
    //     totalPrice: 30000,
    //   },
    // });

    const res = await postOrder({
      req: {
        orderProductsReq: {
          orderProducts: data.carts,
        },
        storeId: data.carts[0].storeId,
        demand: request,
        arrivalTime: `${arriveTime}`,
        totalPrice: sumTotalPrice(data.carts).totalPrice,
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
      {data.carts.length ? (
        <>
          <ItemList />
          <FormProvider {...methods}>
            <form>
              <OrderInformation />
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
