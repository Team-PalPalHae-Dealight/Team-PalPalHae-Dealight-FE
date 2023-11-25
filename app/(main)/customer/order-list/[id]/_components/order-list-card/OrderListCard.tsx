'use client';

import Link from 'next/link';
import { ResponseItemType } from '../../_services/getOrderList';
import pageRoute from '@/app/_constants/path';

export type OrderListCardPropsType = {
  items: ResponseItemType[] | [];
};

const OrderListCard = ({ items }: OrderListCardPropsType) => {
  return (
    <>
      {items.map(item => {
        return (
          <Link
            key={item.orderId}
            href={pageRoute.customer.orderDetail(String(item.orderId))}
          >
            <div
              className=" mb-3 rounded-md bg-white p-2"
              style={{ boxShadow: '0px 0px 4px 0px rgb(0, 0, 0, 0.1)' }}
            >
              <div className="flex text-xs text-dark-gray">
                <div className="flex justify-between">
                  <div>{item.createdAt.split(' ')[0]}</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-black">
                {item.orderProductsRes.orderProducts.length > 1 ? (
                  <div className="text-sm">
                    {item.orderProductsRes.orderProducts[0].name} 외
                    {item.orderProductsRes.orderProducts.length - 1}개
                  </div>
                ) : (
                  <div className="text-sm">
                    {item.orderProductsRes.orderProducts[0].name}
                  </div>
                )}
                <div className=" text-xs">{item.totalPrice} 원</div>
              </div>
              <div className="flex items-center text-black">
                {item.status === '주문 접수' && (
                  <div className="text-sm text-green">{item.status}</div>
                )}
                {item.status === '주문 확인' && (
                  <div className="text-sm text-orange">{item.status}</div>
                )}
                {item.status === '주문 완료' && (
                  <div className="text-sm text-blue">{item.status}</div>
                )}
                {item.status === '주문 취소' && (
                  <div className="text-sm text-red">{item.status}</div>
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
