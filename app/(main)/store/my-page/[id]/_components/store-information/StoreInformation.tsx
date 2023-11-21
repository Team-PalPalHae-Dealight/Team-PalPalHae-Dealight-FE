'use client';

import {
  HOUR_LIST,
  MINUTE_LIST,
} from '@/app/(main)/customer/cart/[id]/_constants/time';
// import {
//   isValidStoreDayOff,
//   isValidStorePhone,
// } from '@/app/(main)/store/register-store/_utils/validate';
import AddressButton from '@/app/_components/AddressButton/AddressButton';
import { ErrorMessage } from '@hookform/error-message';
//import { yupResolver } from '@hookform/resolvers/yup';
import Notification from '@/app/_assets/images/notification.png';
import Image from 'next/image';
import { useState } from 'react';
import { useFormContext, useForm } from 'react-hook-form';
//import { object, string } from 'yup';

type initialValuesType = {
  storePhone: string;
  openHour: string;
  openMinute: string;
  closeHour: string;
  closeMinute: string;
  storeDayOff: string[];
};

const StoreInformation = () => {
  const { register } = useFormContext();
  const [address, setAddress] = useState('');

  //   const schema = object().shape({
  //     storePhone: isValidStorePhone(),
  //     openHour: string(),
  //     openMinute: string(),
  //     closeHour: string(),
  //     closeMinute: string(),
  //     storeDayOff: isValidStoreDayOff(),
  //   });

  const {
    formState: { errors },
  } = useForm<initialValuesType>();

  const handleAddressButton = (address: string) => {
    setAddress(address);
  };

  return (
    <div className="min-h-64 w-full rounded bg-white text-sm font-semibold text-black">
      <div className="p-4">
        <div className="pb-4 text-lg">업체 정보</div>
        <div className="flex justify-between pb-2.5 pr-5">
          <div>
            사업자 등록번호 :{' '}
            <span className="font-normal text-black">{data.storeNumber}</span>
          </div>
        </div>
        <div className="flex items-center pb-2.5">
          <span>업체 전화번호 :</span>
          <input
            className="ml-2 flex-1 border-1 border-solid border-dark-gray p-1.5 text-xs font-normal text-dark-gray outline-none"
            type="text"
            defaultValue={data.storePhone}
            {...register('storePhone')}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="storePhone"
          render={({ message }) => (
            <div className="w-full text-left text-xs text-red">{message}</div>
          )}
        />
        <div className="flex items-center justify-between pb-2.5">
          <div className="pr-2.5">업체 주소 : </div>
          <div className="flex flex-1 items-center justify-between font-normal">
            <div
              className={
                'm-1.5 h-8 flex-1 truncate border-1 border-solid border-dark-gray bg-white px-1 py-1.5 text-xs text-black outline-none'
              }
            >
              {address}
            </div>
            <AddressButton
              type="button"
              getAddress={handleAddressButton}
              className="min-w-fit rounded bg-yellow p-1.5 px-1 text-sm"
            >
              주소찾기
            </AddressButton>
          </div>
        </div>
        <div className="flex pb-2.5">
          개장 시간 :{' '}
          <div className="flex justify-between pl-2 ">
            <div className="mr-3 border-1 border-solid border-dark-gray">
              <select
                className="w-12 text-xs font-normal outline-none"
                defaultValue=""
                {...register('openHour')}
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
                {...register('openMinute')}
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
        <div className="flex pb-2.5">
          마감 시간 :{' '}
          <div className="flex justify-between pl-2 ">
            <div className="mr-3 border-1 border-solid border-dark-gray">
              <select
                className="w-12 text-xs font-normal outline-none"
                defaultValue=""
                {...register('closeHour')}
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
                {...register('closeMinute')}
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
        <div className="mt-5 w-full">
          <div className="mb-2 mt-5 text-xs font-semibold text-black">
            휴무일
          </div>
          <div className="flex w-full items-center">
            <Image className="h-3 w-3" src={Notification} alt="notification" />
            <p className="mb-2 text-xs font-normal text-dark-gray">
              (복수선택가능) 휴무일 설정은 매주를 기준으로 합니다.
            </p>
          </div>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className="grid w-full grid-flow-row grid-cols-8 gap-1.5 font-normal"
          >
            <div className="h-12 w-full bg-white">
              <input
                type="checkbox"
                value="없음"
                defaultChecked
                className="peer/없음 hidden h-12 w-full"
                id="없음"
                {...register('storeDayOff')}
              />
              <label
                htmlFor="없음"
                className="block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/없음:bg-cyan/50"
              >
                없음
              </label>
            </div>
            <div className="h-12 w-full bg-white">
              <input
                type="checkbox"
                value="월요일"
                className=" peer/월요일 hidden h-12 w-full"
                id="월요일"
                {...register('storeDayOff')}
              />
              <label
                htmlFor="월요일"
                className="block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/월요일:bg-cyan/50"
              >
                월요일
              </label>
            </div>
            <div className="h-12 w-full bg-white">
              <input
                type="checkbox"
                value="화요일"
                className=" peer/화요일 hidden h-12 w-full"
                id="화요일"
                {...register('storeDayOff')}
              />
              <label
                htmlFor="화요일"
                className="block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/화요일:bg-cyan/50"
              >
                화요일
              </label>
            </div>
            <div className="h-12 w-full bg-white">
              <input
                type="checkbox"
                value="수요일"
                className=" peer/수요일 hidden h-12 w-full"
                id="수요일"
                {...register('storeDayOff')}
              />
              <label
                htmlFor="수요일"
                className="block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/수요일:bg-cyan/50"
              >
                수요일
              </label>
            </div>
            <div className="h-12 w-full bg-white">
              <input
                type="checkbox"
                value="목요일"
                className=" peer/목요일 hidden h-12 w-full"
                id="목요일"
                {...register('storeDayOff')}
              />
              <label
                htmlFor="목요일"
                className="block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/목요일:bg-cyan/50"
              >
                목요일
              </label>
            </div>
            <div className="h-12 w-full bg-white">
              <input
                type="checkbox"
                value="금요일"
                className=" peer/금요일 hidden h-12 w-full"
                id="금요일"
                {...register('storeDayOff')}
              />
              <label
                htmlFor="금요일"
                className="block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/금요일:bg-cyan/50"
              >
                금요일
              </label>
            </div>
            <div className="h-12 w-full bg-white">
              <input
                type="checkbox"
                value="토요일"
                className=" peer/토요일 hidden h-12 w-full"
                id="토요일"
                {...register('storeDayOff')}
              />
              <label
                htmlFor="토요일"
                className="block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/토요일:bg-cyan/50"
              >
                토요일
              </label>
            </div>
            <div className="h-12 w-full bg-white">
              <input
                type="checkbox"
                value="일요일"
                className=" peer/일요일 hidden h-12 w-full"
                id="일요일"
                {...register('storeDayOff')}
              />
              <label
                htmlFor="일요일"
                className="block h-12 w-full cursor-pointer text-center text-xs leading-12 text-black peer-checked/일요일:bg-cyan/50"
              >
                일요일
              </label>
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name="storeDayOff"
            render={({ message }) => (
              <div className="w-full text-left text-xs text-red">{message}</div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default StoreInformation;

/** @TODO API 연결 후 res로 받은 데이터로 초기화시키기 */
export const data = {
  storeNumber: '0123456789',
  storePhone: '03112341234',
};
