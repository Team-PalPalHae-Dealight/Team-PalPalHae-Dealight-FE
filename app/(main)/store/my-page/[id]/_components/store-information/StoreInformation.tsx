'use client';

import AddressButton from '@/app/_components/AddressButton/AddressButton';
import { ErrorMessage } from '@hookform/error-message';
import Notification from '@/app/_assets/svgs/notification.svg';
import { useFormContext } from 'react-hook-form';
import { TIME_LIST } from '@/app/(main)/store/register-store/_constants/time';
import { DAY_LIST, checkboxClassName } from '../../_constants/day';
import { MyStoreInfo } from '@/app/_types/store/storeType';
import useCoordinate from '@/app/_hooks/useCoordinate';

type StoreInformationPropsType = {
  storeInfo: MyStoreInfo;
};

const StoreInformation = ({ storeInfo }: StoreInformationPropsType) => {
  const { storeNumber, telephone, addressName, openTime, closeTime, dayOff } =
    storeInfo;

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { storeAddress } = watch();
  const { changeCoords } = useCoordinate(storeAddress ?? addressName);

  const handleAddressButton = (addr: string) => {
    setValue('storeAddress', addr);
    changeCoords(addr);
  };

  return (
    <div className="min-h-64 mb-2.5 w-full rounded bg-white text-sm font-semibold text-black">
      <div className="p-4">
        <div className="pb-4 text-lg">업체 정보</div>
        <div className="flex justify-between pb-2.5 pr-5">
          <div>
            사업자 등록번호 :{' '}
            <span className="font-normal text-black">{storeNumber}</span>
          </div>
        </div>
        <div className="flex items-center pb-2.5">
          <span>업체 전화번호 :</span>
          <input
            className="ml-2 flex-1 border-1 border-solid border-dark-gray p-1.5 text-sm font-normal text-black outline-none"
            type="text"
            defaultValue={telephone}
            {...register('storePhoneNumber')}
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
        <div className="flex w-full items-center justify-between pb-2.5">
          <div className="min-w-fit pr-0.5">업체 주소 : </div>
          <input
            className="ml-2 flex-1 overflow-auto text-ellipsis border-1 border-solid border-dark-gray p-1.5 text-sm font-normal text-black outline-none"
            type="text"
            disabled
            defaultValue={addressName}
            {...register('storeAddress')}
          />
          <AddressButton
            type="button"
            getAddress={handleAddressButton}
            className="ml-2.5 min-w-fit rounded bg-yellow p-1.5 px-1 text-sm font-normal"
          >
            주소찾기
          </AddressButton>
        </div>
        <div className="flex items-center justify-between pb-2.5">
          <div className="pr-2">개장 시간 :</div>
          <div className="flex flex-1 items-center justify-center border-1 border-dark-gray">
            <select
              className="h-8 w-full text-sm font-normal outline-none"
              defaultValue={openTime}
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
              defaultValue={closeTime}
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
              dayOff && dayOff.includes(day) ? (
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
