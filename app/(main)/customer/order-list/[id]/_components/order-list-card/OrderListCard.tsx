'use client';

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
            href={pageRoute.customer.orderDetail(String(order.orderId))}
          >
            <div
              className=" mb-3 rounded-md bg-white p-2"
              style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
            >
              <div className="flex text-xs text-dark-gray">
                <div className="flex justify-between gap-1">
                  <div>{order.createdAt.split(' ')[0]}</div>
                  <div>{order.createdAt.split(' ')[1]}</div>
                </div>
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
              <div className="flex items-center text-black">
                {order.status === '주문 접수' && (
                  <div className="text-sm text-green">{order.status}</div>
                )}
                {order.status === '주문 확인' && (
                  <div className="text-sm text-orange">{order.status}</div>
                )}
                {order.status === '주문 완료' && (
                  <div className="text-sm text-blue">{order.status}</div>
                )}
                {order.status === '주문 취소' && (
                  <div className="text-sm text-red">{order.status}</div>
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
