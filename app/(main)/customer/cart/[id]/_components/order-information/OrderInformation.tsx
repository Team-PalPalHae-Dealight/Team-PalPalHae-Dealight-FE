'use client';

import { useFormContext } from 'react-hook-form';
import { CartType } from '../../_types/CartType';
import { useUserInfo } from '@/app/_providers/UserInfoProvider';
import { sumTotalPrice } from '../../_utils/sumTotalPrice';

type OrderInformationPropsType = {
  data: CartType[];
};

const OrderInformation = ({ data }: OrderInformationPropsType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { nickName } = useUserInfo();
  const total = sumTotalPrice({ data });

  return (
    <>
      {data ? (
        <div className="min-h-64 w-full rounded bg-white text-sm font-semibold text-black">
          <div className="p-4">
            <div className="pb-4 text-xl">주문 정보</div>
            <div className="flex justify-between pb-2.5 pr-5">
              <div className="w-3/5 max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap">
                가게명 : <span>{data[0]?.storeName}</span>
              </div>
              <div>총 수량 : {total.totalCount} 개</div>
            </div>
            <div className="w-64 overflow-hidden text-ellipsis whitespace-nowrap pb-2.5">
              상품명 :{' '}
              <span>
                {data.length === 1
                  ? data[0]?.itemName
                  : `${data[0]?.itemName} 외 ${data.length - 1} 개`}
              </span>
            </div>
            <div className="pb-2.5">
              주문자 : <span>{nickName}</span>
            </div>
            <div className="pb-2.5">
              마감 시간 : <span>{data[0].storeCloseTime}</span>
            </div>
            <div className="flex w-full flex-col pb-2.5">
              <label className="w-full text-xs font-semibold">
                도착 예정 시간
              </label>
              <div className="flex-1">
                <input
                  type="time"
                  className={`h-12 w-full cursor-pointer rounded border-1 border-gray text-xs font-normal text-black ${
                    errors.arriveTime ? 'border-red' : 'border-white'
                  } bg-gray pl-3 outline-none`}
                  {...register('arriveTime')}
                />
              </div>
            </div>
            <div className="flex w-full flex-col">
              <label className="w-full text-xs font-semibold">요청 사항</label>
              <input
                className="min-h-[80px] flex-1 rounded bg-gray p-1.5 text-xs font-normal outline-none"
                type="text"
                placeholder="선택 사항입니다."
                defaultValue=""
                {...register('request')}
              />
            </div>
          </div>
          <div className="flex h-12 w-full justify-between rounded-b bg-yellow px-4 leading-12">
            <div>총 금액 : </div>
            <div>{total.totalPrice} 원</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OrderInformation;
