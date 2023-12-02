'use client';

import AddressButton from '@/app/_components/AddressButton/AddressButton';
import { ErrorMessage } from '@hookform/error-message';
import Notification from '@/app/_assets/images/notification.png';
import { useFormContext } from 'react-hook-form';
import { DAY_LIST, checkboxClassName } from '../../_constants/day';
import { MyStoreInfo } from '@/app/_types/store/storeType';
import useCoordinate from '@/app/_hooks/useCoordinate';
import Image from 'next/image';

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

  const handleAddressButton = (address: string) => {
    setValue('storeAddress', address);
    changeCoords(address);
  };

  return (
    <div className="min-h-64 mb-2.5 w-full rounded bg-white text-sm font-semibold text-black">
      <div className="p-4">
        <div className="pb-4 text-xl">업체 정보</div>
        <div className="flex justify-between pb-2.5 pr-5">
          <div>
            사업자 등록번호 :{' '}
            <span className="font-normal text-black">{storeNumber}</span>
          </div>
        </div>
        <div className="flex flex-col pb-1.5">
          <div className="text-semibold pb-1.5 text-xs">업체 전화번호 :</div>
          <input
            className="flex-1 border-1 border-solid border-dark-gray p-1.5 text-sm font-normal text-black outline-none"
            type="text"
            defaultValue={telephone}
            {...register('storePhoneNumber')}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="storePhoneNumber"
          render={({ message }) => (
            <div className="w-full pb-2.5 text-left text-xs font-normal text-red">
              {message}
            </div>
          )}
        />
        <div className="flex w-full flex-col pb-2.5">
          <div className="pb-1.5 text-xs">업체 주소 : </div>
          <div className="flex items-center justify-between">
            <input
              className="flex-1 truncate border-1 border-solid border-dark-gray p-1.5 text-sm font-normal text-black outline-none"
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
        </div>
        <div className="flex items-center justify-between pb-2.5">
          <div className="pr-2">개장 시간 :</div>
          <div className="flex flex-1 items-center justify-center border-1 border-dark-gray">
            <input
              type="time"
              defaultValue={openTime}
              className={`h-12 w-full cursor-pointer rounded text-xs font-normal text-black ${
                errors.storeOpenTime ? 'border-red' : 'border-yellow'
              } bg-white pl-3 outline-none focus:border-2`}
              {...register('storeOpenTime')}
            />
          </div>
        </div>
        <div className="flex items-center justify-between pb-1.5">
          <div className="pr-2">마감 시간 :</div>
          <div className="flex flex-1 items-center justify-center border-1 border-dark-gray">
            <input
              type="time"
              defaultValue={closeTime}
              className={`h-12 w-full cursor-pointer rounded text-xs font-normal text-black ${
                errors.storeOpenTime ? 'border-red' : 'border-yellow'
              } bg-white pl-3 outline-none focus:border-2`}
              {...register('storeCloseTime')}
            />
          </div>
        </div>
        <ErrorMessage
          errors={errors}
          name="storeCloseTime"
          render={({ message }) => (
            <div className="w-full pb-2.5 text-left text-xs font-normal text-red">
              {message}
            </div>
          )}
        />
        <div className="mt-5 w-full">
          <div className="mb-2 mt-5 text-xs font-semibold text-black">
            휴무일
          </div>
          <div className="flex w-full">
            <Image
              className="mr-1 mt-0.5 h-5 w-5"
              src={Notification}
              alt="notification"
            />
            <p className="mb-2 text-xs font-normal text-dark-gray">
              매주를 기준으로 하며, 선택하지 않을 경우 연중 무휴로 설정됩니다.
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
                    value={`${day}요일`}
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
                    value={`${day}요일`}
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
