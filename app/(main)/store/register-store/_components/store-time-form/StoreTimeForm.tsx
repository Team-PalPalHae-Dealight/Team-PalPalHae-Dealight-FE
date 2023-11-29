'use client';

import { ErrorMessage } from '@hookform/error-message';
import { object } from 'yup';
import { TIME_LIST } from '../../_constants/time';
import { SubmitHandler, useForm } from 'react-hook-form';
import Notification from '@/app/_assets/images/notification.png';
import Image from 'next/image';
import {
  isValidStoreCloseTime,
  isValidStoreOpenTime,
} from '../../_utils/validate';
import LocalStorage from '@/app/_utils/localstorage';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { postStore } from '../../_services/postStore';
import getReq from '../../_utils/getReq';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';
import { useAuth } from '@/app/_providers/AuthProvider';
import pageRoute from '@/app/_constants/path';

type initialValuesType = {
  storeOpenTime: string;
  storeCloseTime: string;
  storeDayOff: string[];
};

const StoreTimeForm = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('/');

  const token = {
    accessToken: LocalStorage.getItem('dealight-accessToken'),
    refreshToken: LocalStorage.getItem('dealight-refreshToken'),
  };

  const { login } = useAuth();

  const schema = object().shape({
    storeOpenTime: isValidStoreOpenTime(),
    storeCloseTime: isValidStoreCloseTime(),
  });

  const onSubmit: SubmitHandler<initialValuesType> = async () => {
    const { storeOpenTime, storeCloseTime, storeDayOff } = watch();

    LocalStorage.setItem('dealight-storeOpenTime', storeOpenTime + ':00');
    LocalStorage.setItem('dealight-storeCloseTime', storeCloseTime + ':00');
    if (storeDayOff) {
      LocalStorage.setItem(
        'dealight-storeDayOff',
        storeDayOff.length ? storeDayOff : ['연중 무휴']
      );
    } else {
      LocalStorage.setItem('dealight-storeDayOff', ['연중 무휴']);
    }

    const req = getReq();
    const res = await postStore({ req: req });
    if (res.status === 200) {
      setMessage('업체가 등록되었습니다.');
      setUrl(pageRoute.store.home());
    } else {
      setMessage('오류가 발생했습니다.');
      setUrl('/');
    }
    setOpen(true);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    //eslint-disable-next-line
  } = useForm<initialValuesType | any>({ resolver: yupResolver(schema) });

  return (
    <div className="flex w-full flex-col items-center">
      <form className="mt-40 w-full" onSubmit={handleSubmit(onSubmit)}>
        <label className="w text-xs font-semibold">영업시간</label>
        <div className="flex w-full">
          <div className="base-1/3 w-full">
            <select
              className={`h-12 w-full cursor-pointer rounded text-xs text-black ${
                errors.storeOpenTime ? 'border-red' : 'border-yellow'
              } bg-white pl-3 outline-none focus:border-2`}
              {...register('storeOpenTime')}
            >
              {TIME_LIST.map(time => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <ErrorMessage
              errors={errors}
              name="storeOpenTime"
              render={({ message }) => (
                <div className="w-full pt-3 text-left text-xs text-red">
                  {message}
                </div>
              )}
            />
          </div>
          <div className="base-1/3 h-12 w-full pt-3 text-center text-xs text-black">
            ~
          </div>
          <div className="base-1/3 w-full">
            <select
              className={`h-12 w-full cursor-pointer rounded text-xs text-black ${
                errors.storeCloseTime ? 'border-red' : 'border-yellow'
              } bg-white pl-3 outline-none focus:border-2`}
              {...register('storeCloseTime')}
            >
              {TIME_LIST.map(time => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ErrorMessage
          errors={errors}
          name="storeCloseTime"
          render={({ message }) => (
            <div className="w-full text-left text-xs text-red">{message}</div>
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
            <p className="mb-2 text-xs text-dark-gray">
              매주를 기준으로 하며, 선택하지 않을 경우 연중 무휴로 설정됩니다.
            </p>
          </div>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className="grid w-full grid-flow-row grid-cols-4 gap-2.5 text-xs"
          >
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
        <div className="mb-7 mt-24 flex justify-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow"></div>
        </div>
        <PrimaryButton type="submit" onClick={() => {}}>
          등록하기
        </PrimaryButton>
      </form>
      {open && (
        <CustomPopUp
          mainText={message}
          btnText="확인"
          btnClick={() => {
            setOpen(false);
            login(token);
            router.push(url);
          }}
        />
      )}
    </div>
  );
};

export default StoreTimeForm;
