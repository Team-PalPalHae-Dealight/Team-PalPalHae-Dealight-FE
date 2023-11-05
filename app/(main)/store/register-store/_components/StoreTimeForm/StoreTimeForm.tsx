'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { array, object, string } from 'yup';
import { ERROR_MESSAGE } from '../../_constants/errorMessage';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
//import pageRoute from '@/app/_constants/route';
//import { useRouter } from 'next/navigation';
import { timeList } from '../../_constants/time';
import Notification from '@/app/_assets/images/notification.png';
import Image from 'next/image';

type initialValuesType = {
  storeOpenTime: string;
  storeCloseTime: string;
  storeDayOff: string[];
};

const StoreTimeForm = () => {
  //const router = useRouter();

  const initialValues = {
    storeOpenTime: '',
    storeCloseTime: '',
    storeDayOff: [],
  };
  const schema = object().shape({
    storeOpenTime: string().required(ERROR_MESSAGE.STORE_REQUIRED),
    storeCloseTime: string().required(ERROR_MESSAGE.STORE_REQUIRED),
    storeDayOff: array()
      .required(ERROR_MESSAGE.STORE_REQUIRED)
      .min(1, ERROR_MESSAGE.STORE_ARRAY_MIN),
  });

  const submitForm = (values: initialValuesType) => {
    localStorage.setItem('dealight-storeOpenTime', values.storeOpenTime);
    localStorage.setItem('dealight-storeCloseTime', values.storeCloseTime);
    localStorage.setItem(
      'dealight-storeDayOff',
      JSON.stringify(values.storeDayOff)
    ); // get으로 가져올 때에는 JSON.parse
    /** @todo api res 값에 따라 라우팅 분기 처리 */
    // router.push(pageRoute.store.home());
  };

  return (
    <div className="flex w-full flex-col items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={submitForm}
      >
        {formik => {
          return (
            <Form className="mt-40 w-full">
              <label className="w text-xs font-semibold">영업시간</label>
              <div className="flex w-full">
                <div className="base-1/3 w-full">
                  <Field
                    as="select"
                    name="storeOpenTime"
                    className={`h-12 w-full rounded text-base text-black ${
                      formik.errors.storeOpenTime
                        ? 'border-red'
                        : 'border-yellow'
                    } bg-white pl-3 outline-none focus:border-2`}
                  >
                    {timeList.map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="storeOpenTime"
                    component="span"
                    className="w-full text-left text-xs text-red"
                  />
                </div>
                <div className="base-1/3 h-12 w-full pt-3 text-center text-base text-black">
                  ~
                </div>
                <div className="base-1/3 w-full">
                  <Field
                    as="select"
                    name="storeCloseTime"
                    className={`h-12 w-full rounded text-base text-black ${
                      formik.errors.storeCloseTime
                        ? 'border-red'
                        : 'border-yellow'
                    } bg-white pl-3 outline-none focus:border-2`}
                  >
                    {timeList.map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="storeCloseTime"
                    component="span"
                    className="w-full text-left text-xs text-red"
                  />
                </div>
              </div>
              <div className="mt-5 w-full">
                <div className="mb-2 mt-5 text-xs font-semibold text-black">
                  휴무일
                </div>
                <div className="flex w-full">
                  <Image
                    className="h-3 w-3"
                    src={Notification}
                    alt="notification"
                  />
                  <p className="mb-2 text-xs text-dark-gray">
                    (복수선택가능) 휴무일 설정은 매주를 기준으로 합니다.
                  </p>
                </div>
                <div
                  role="group"
                  aria-labelledby="checkbox-group"
                  className="grid w-full grid-flow-row grid-cols-4 gap-2.5"
                >
                  <div className="h-12 w-full bg-white">
                    <Field
                      type="checkbox"
                      name="storeDayOff"
                      value="연중무휴"
                      className=" peer/연중무휴 hidden h-12 w-full"
                      id="연중무휴"
                    />
                    <label
                      htmlFor="연중무휴"
                      className="block h-12 w-full text-center text-xs leading-12 text-black peer-checked/연중무휴:bg-cyan/50"
                    >
                      연중무휴
                    </label>
                  </div>
                  <div className="h-12 w-full bg-white">
                    <Field
                      type="checkbox"
                      name="storeDayOff"
                      value="월요일"
                      className=" peer/월요일 hidden h-12 w-full"
                      id="월요일"
                    />
                    <label
                      htmlFor="월요일"
                      className="block h-12 w-full text-center text-xs leading-12 text-black peer-checked/월요일:bg-cyan/50"
                    >
                      월요일
                    </label>
                  </div>
                  <div className="h-12 w-full bg-white">
                    <Field
                      type="checkbox"
                      name="storeDayOff"
                      value="화요일"
                      className=" peer/화요일 hidden h-12 w-full"
                      id="화요일"
                    />
                    <label
                      htmlFor="화요일"
                      className="block h-12 w-full text-center text-xs leading-12 text-black peer-checked/화요일:bg-cyan/50"
                    >
                      화요일
                    </label>
                  </div>
                  <div className="h-12 w-full bg-white">
                    <Field
                      type="checkbox"
                      name="storeDayOff"
                      value="수요일"
                      className=" peer/수요일 hidden h-12 w-full"
                      id="수요일"
                    />
                    <label
                      htmlFor="수요일"
                      className="block h-12 w-full text-center text-xs leading-12 text-black peer-checked/수요일:bg-cyan/50"
                    >
                      수요일
                    </label>
                  </div>
                  <div className="h-12 w-full bg-white">
                    <Field
                      type="checkbox"
                      name="storeDayOff"
                      value="목요일"
                      className=" peer/목요일 hidden h-12 w-full"
                      id="목요일"
                    />
                    <label
                      htmlFor="목요일"
                      className="block h-12 w-full text-center text-xs leading-12 text-black peer-checked/목요일:bg-cyan/50"
                    >
                      목요일
                    </label>
                  </div>
                  <div className="h-12 w-full bg-white">
                    <Field
                      type="checkbox"
                      name="storeDayOff"
                      value="금요일"
                      className=" peer/금요일 hidden h-12 w-full"
                      id="금요일"
                    />
                    <label
                      htmlFor="금요일"
                      className="block h-12 w-full text-center text-xs leading-12 text-black peer-checked/금요일:bg-cyan/50"
                    >
                      금요일
                    </label>
                  </div>
                  <div className="h-12 w-full bg-white">
                    <Field
                      type="checkbox"
                      name="storeDayOff"
                      value="토요일"
                      className=" peer/토요일 hidden h-12 w-full"
                      id="토요일"
                    />
                    <label
                      htmlFor="토요일"
                      className="block h-12 w-full text-center text-xs leading-12 text-black peer-checked/토요일:bg-cyan/50"
                    >
                      토요일
                    </label>
                  </div>
                  <div className="h-12 w-full bg-white">
                    <Field
                      type="checkbox"
                      name="storeDayOff"
                      value="일요일"
                      className=" peer/일요일 hidden h-12 w-full"
                      id="일요일"
                    />
                    <label
                      htmlFor="일요일"
                      className="block h-12 w-full text-center text-xs leading-12 text-black peer-checked/일요일:bg-cyan/50"
                    >
                      일요일
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  name="storeDayOff"
                  component="span"
                  className="w-full text-left text-xs text-red"
                />
              </div>
              <div className="mb-7 mt-24 flex justify-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow"></div>
              </div>
              <PrimaryButton type="submit">등록하기</PrimaryButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default StoreTimeForm;
