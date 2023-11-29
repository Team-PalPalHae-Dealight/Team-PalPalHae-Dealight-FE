type OrderResultPropsType = {
  storeName: string;
  totalCount: string;
  totalPrice: string;
  arriveTime: string;
  useName: string;
  comments: string;
};

const OrderResult = (props: { data: OrderResultPropsType }) => {
  const { storeName, totalCount, totalPrice, arriveTime, useName, comments } =
    props.data;

  return (
    <div className="min-h-64 my-5 w-full rounded bg-white text-sm font-semibold text-black">
      <div className="p-4">
        <div className="pb-4 text-xl">주문 정보</div>
        <div className="flex w-full justify-between pb-2.5 pr-5 ">
          <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            가게명 : <span className="font-normal text-black">{storeName}</span>
          </div>
          <div>총 수량 : {totalCount} 개</div>
        </div>
        <div className="pb-2.5">
          주문자 : <span className="font-normal text-black">{useName}</span>
        </div>
        <div className="pb-2.5">
          총금액 :{' '}
          <span className="font-normal text-black">{totalPrice} 원</span>
        </div>
        <div className="flex pb-2.5">
          도착 예정 시간 :{' '}
          <span className="pl-2 font-normal text-black">{arriveTime}</span>
        </div>
        <div className="flex">
          <span>요청 사항 :</span>
          <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap pl-2 font-normal text-black">
            {comments}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderResult;
