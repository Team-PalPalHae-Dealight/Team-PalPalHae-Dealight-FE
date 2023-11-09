import { MouseEvent } from 'react';

type OrderListModalPropType = {
  onClose: () => void;
};

const OrderListModal = ({ onClose }: OrderListModalPropType) => {
  const onClickOutSide = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={onClickOutSide}
    >
      <div className="w-60 rounded-2xl bg-white p-5">
        <div>
          <label className="mb-4 text-xl font-semibold">주문 상태</label>
        </div>
        <div>
          <div className="mt-3">
            <label className="text-sm font-semibold text-[#00CC22]">
              주문 접수
            </label>
          </div>
          <div>
            <p className=" text-xs text-dark-gray">
              주문 접수는 고객이 상품을 주문해 예약만 완료된 상태입니다.
            </p>
          </div>
          <div className="mt-3">
            <label className="text-sm font-semibold text-[#FF5C01]">
              주문 확인
            </label>
          </div>
          <div>
            <p className=" text-xs text-dark-gray">
              주문 확인은 업체가 예약을 접수한 상태로, 거래가 이루어지기 전
              상태입니다.
            </p>
          </div>
          <div className="mt-3">
            <label className="text-sm font-semibold text-[#0338FF]">
              주문 완료
            </label>
          </div>
          <div>
            <p className=" text-xs text-dark-gray">
              주문 완료는 업체와 고객간 거래가 성사되어, 계산까지 모두 완료된
              상태입니다.
            </p>
          </div>
          <div className="mt-3">
            <label className="text-sm font-semibold text-[#FF0201]">
              주문 취소
            </label>
          </div>
          <div>
            <p className=" text-xs text-dark-gray">
              주문 취소는 업체 또는 고객이 예약 접수를 취소한 상태로, 접수와
              확인 단계에서 할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListModal;
