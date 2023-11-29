import { MouseEvent } from 'react';

type OrderListModalPropsType = {
  onClose: () => void;
};

const OrderListModal = ({ onClose }: OrderListModalPropsType) => {
  const onClickOutSide = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={onClickOutSide}
    >
      <div className="w-60 rounded-2xl bg-white p-5">
        <div>
          <label className="mb-4 text-xl font-semibold">주문 상태</label>
        </div>
        <div>
          <div className="mt-3">
            <label className="text-sm font-semibold text-green">
              주문 접수
            </label>
          </div>
          <div>
            <p className=" text-xs text-dark-gray">
              주문 접수는 고객이 상품을 주문해 예약만 완료된 상태입니다.
            </p>
          </div>
          <div className="mt-3">
            <label className="text-sm font-semibold text-orange">
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
            <label className="text-sm font-semibold text-blue">주문 완료</label>
          </div>
          <div>
            <p className=" text-xs text-dark-gray">
              주문 완료는 업체와 고객간 거래가 성사되어, 계산까지 모두 완료된
              상태입니다.
            </p>
          </div>
          <div className="mt-3">
            <label className="text-sm font-semibold text-red">주문 취소</label>
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
