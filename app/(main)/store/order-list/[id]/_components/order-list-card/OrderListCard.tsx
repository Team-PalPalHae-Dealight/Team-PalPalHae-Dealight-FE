import Link from 'next/link';
import pageRoute from '@/app/_constants/path';
import { OrdersType } from '@/app/_types/api/order';

export type OrderListCardPropsType = {
  orders: OrdersType[];
};

const OrderListCard = ({ orders }: OrderListCardPropsType) => {
  return (
    <>
      {orders.map(order => {
        return (
          <Link
            key={order.orderId}
            href={pageRoute.store.orderDetail(String(order.orderId))}
          >
            <div
              className=" mb-3 rounded-md bg-white p-2"
              style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
            >
              <div className="flex gap-1 text-xs text-dark-gray">
                <div>{order.createdAt.split(' ')[0]}</div>
                <div>{order.createdAt.split(' ')[1]}</div>
              </div>
              <div className="flex items-center gap-1 text-black">
                {order.orderProductsRes.orderProducts.length > 1 ? (
                  <div className="text-sm">
                    {order.orderProductsRes.orderProducts[0].name} 외
                    {order.orderProductsRes.orderProducts.length - 1}개
                  </div>
                ) : (
                  <div className="text-sm">
                    {order.orderProductsRes.orderProducts[0].name}
                  </div>
                )}
                <div className=" text-xs">{order.totalPrice} 원</div>
              </div>
              <div className="flex items-center justify-between text-black">
                <div className="text-xs">
                  도착예정 시간 : {order.arrivalTime.split(':')[0]}시
                  {order.arrivalTime.split(':')[1]}분
                </div>
                {order.status === '주문 접수' && (
                  <div className="text-sm text-green">주문 접수</div>
                )}
                {order.status === '주문 확인' && (
                  <div className="text-sm text-orange">주문 확인</div>
                )}
                {order.status === '주문 완료' && (
                  <div className="text-sm text-blue">주문 완료</div>
                )}
                {order.status === '주문 취소' && (
                  <div className="text-sm text-red">주문 취소</div>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default OrderListCard;
