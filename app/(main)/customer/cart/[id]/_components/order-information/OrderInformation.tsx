import { useForm } from 'react-hook-form';
import { HOUR_LIST, MINUTE_LIST } from '../../_constants/time';

type InputType = {
  hour: string;
  minute: string;
  request: string;
};

type OrderInformationPropsType = {
  getInput: ({ hour, minute, request }: InputType) => void;
};

const OrderInformation = ({ getInput }: OrderInformationPropsType) => {
  const { register, watch } = useForm({});
  const { hour, minute, request } = watch();

  getInput({ hour, minute, request });

  return (
    <div className="min-h-64 w-full rounded bg-white text-sm font-semibold text-black">
      <div className="p-4">
        <div className="pb-4 text-lg">주문 정보</div>
        <div className="flex justify-between pb-2.5 pr-5">
          <div>
            가게명 :{' '}
            <span className="font-normal text-dark-gray">{data.storeName}</span>
          </div>
          <div>총 수량 : {data.totalCount} 개</div>
        </div>
        <div className="pb-2.5">
          상품명 :{' '}
          <span className="font-normal text-dark-gray">{data.itemName}</span>
        </div>
        <div className="pb-2.5">
          주문자 :{' '}
          <span className="font-normal text-dark-gray">{data.useName}</span>
        </div>
        <div className="flex pb-2.5">
          도착 예정 시간 :{' '}
          <div className="flex justify-between pl-2 ">
            <div className="mr-3 border-1 border-solid border-dark-gray">
              <select
                className="w-12 text-xs font-normal outline-none"
                defaultValue=""
                {...register('hour')}
              >
                {HOUR_LIST.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            :
            <div className="ml-3 border-1 border-solid border-dark-gray">
              <select
                className="w-12 text-xs font-normal"
                defaultValue=""
                {...register('minute')}
              >
                {MINUTE_LIST.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex">
          <span>요청 사항 :</span>
          <input
            className="ml-2 min-h-[40px] flex-1 border-1 border-solid border-dark-gray p-1.5 text-xs font-normal outline-none"
            type="text"
            placeholder="(선택 사항) 요청사항을 작성해주세요"
            defaultValue=""
            {...register('request')}
          />
        </div>
      </div>
      <div className="flex h-12 w-full justify-between rounded-b bg-yellow px-4 leading-12">
        <div>총 금액 : </div>
        <div>{data.totalPrice} 원</div>
      </div>
    </div>
  );
};

export default OrderInformation;

/** @TODO API 연결 후 res로 받은 데이터로 초기화시키기 */
export const data = {
  storeName: '행복도너츠가게',
  totalCount: '4',
  itemName: '달콤한 도너츠 외 3개',
  useName: '에프와 오프',
  totalPrice: '11000',
};
