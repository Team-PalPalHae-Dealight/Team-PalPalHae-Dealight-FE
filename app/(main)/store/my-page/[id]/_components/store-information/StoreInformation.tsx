'use client';

import AddressButton from '@/app/_components/AddressButton/AddressButton';
import { ErrorMessage } from '@hookform/error-message';
import Notification from '@/app/_assets/svgs/notification.svg';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { TIME_LIST } from '@/app/(main)/store/register-store/_constants/time';
import { profileType } from '../../_types/profileType';
import { DAY_LIST, checkboxClassName } from '../../_constants/day';
import LocalStorage from '@/app/_utils/localstorage';
import useCoordinate from '@/app/_hooks/useCoordinate';

const StoreInformation = (props: { data: profileType }) => {
  const [address, setAddress] = useState(
    LocalStorage.getItem('dealight-address')
  );

  const coords = useCoordinate(address);
  LocalStorage.setItem('dealight-coords', coords);

  const handleAddressButton = (address: string) => {
    setAddress(address);
    LocalStorage.setItem('dealight-address', address);
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="min-h-64 mb-2.5 w-full rounded bg-white text-sm font-semibold text-black">
      <div className="p-4">
        <div className="pb-4 text-lg">업체 정보</div>
        <div className="flex justify-between pb-2.5 pr-5">
          <div>
            사업자 등록번호 :{' '}
            <span className="font-normal text-black">
              {props.data.storeNumber}
            </span>
          </div>
        </div>
        <div className="flex items-center pb-2.5">
          <span>업체 전화번호 :</span>
          <input
            className="ml-2 flex-1 border-1 border-solid border-dark-gray p-1.5 text-sm font-normal text-dark-gray outline-none"
            type="text"
            defaultValue={props.data.telephone}
            {...register('telephone')}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="telephone"
          render={({ message }) => (
            <div className="w-full pb-1.5 text-left text-xs font-normal text-red">
              {message}
            </div>
          )}
        />
        <div className="flex items-center justify-between pb-2.5">
          <div className="pr-0.5">업체 주소 : </div>
          <div className="flex flex-1 items-center justify-between font-normal">
            <div
              className={
                'm-1 h-8 flex-1 truncate border-1 border-solid border-dark-gray bg-white px-1 py-1.5 text-xs text-black outline-none'
              }
            >
              {address === '' ? props.data.addressName : address}
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
        <div className="flex items-center justify-between pb-2.5">
          <div className="pr-2">개장 시간 :</div>
          <div className="flex flex-1 items-center justify-center border-1 border-dark-gray">
            <select
              className="h-8 w-full text-sm font-normal outline-none"
              defaultValue={props.data.openTime}
              {...register('openTime')}
            >
              {TIME_LIST.map(time => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between pb-2.5">
          <div className="pr-2">마감 시간 :</div>
          <div className="flex flex-1 items-center justify-center border-1 border-dark-gray">
            <select
              className="h-8 w-full text-sm font-normal outline-none"
              defaultValue={props.data.closeTime}
              {...register('closeTime')}
            >
              {TIME_LIST.map(time => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5 w-full">
          <div className="mb-2 mt-5 text-xs font-semibold text-black">
            휴무일
          </div>
          <div className="flex w-full items-start">
            <Notification className="mr-1 mt-0.5 h-6 w-6" />
            <p className="mb-2 text-xs font-normal text-dark-gray">
              (복수선택가능) 휴무일 설정은 매주를 기준으로 하며, 선택하지 않을
              경우 연중 무휴로 인지됩니다.
            </p>
          </div>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className="grid w-full grid-flow-row grid-cols-7 gap-1.5 font-normal"
          >
            {DAY_LIST.map((day: string) =>
              props.data.dayOff && props.data.dayOff.includes(day) ? (
                <div className="h-12 w-full bg-white" key={day}>
                  <input
                    type="checkbox"
                    value={day}
                    className={checkboxClassName[day].input}
                    id={day}
                    defaultChecked={true}
                    {...register('dayOff')}
                  />
                  <label htmlFor={day} className={checkboxClassName[day].label}>
                    {day}
                  </label>
                </div>
              ) : (
                <div className="h-12 w-full bg-white" key={day}>
                  <input
                    type="checkbox"
                    value={day}
                    className={checkboxClassName[day].input}
                    id={day}
                    defaultChecked={false}
                    {...register('dayOff')}
                  />
                  <label htmlFor={day} className={checkboxClassName[day].label}>
                    {day}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInformation;
