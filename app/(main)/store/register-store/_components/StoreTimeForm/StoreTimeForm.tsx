'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { array, object, string } from 'yup';
import { ERROR_MESSAGE } from '../../_constants/errorMessage';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import pageRoute from '@/app/_constants/route';
import { useRouter } from 'next/navigation';

type initialValuesType = {
  storeOpenTime: string;
  storeCloseTime: string;
  storeDayOff: string[];
};

const StoreTimeForm = () => {
  const router = useRouter();

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
    router.push(pageRoute.store.home());
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
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
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
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                  </Field>
                  <ErrorMessage
                    name="storeCloseTime"
                    component="span"
                    className="w-full text-left text-xs text-red"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  className="mt-5 text-xs font-semibold text-black"
                  htmlFor="storeDayOff"
                >
                  휴무일
                </label>
                <div
                  role="group"
                  aria-labelledby="checkbox-group"
                  className="grid grid-rows-4 gap-2.5"
                >
                  <Field
                    type="checkbox"
                    name="storeDayOff"
                    value="연중무휴"
                    className="h-12 w-full appearance-none"
                  />
                  연중무휴
                  <Field
                    type="checkbox"
                    name="storeDayOff"
                    value="월요일"
                    className="h-12 w-full appearance-none"
                  />
                  월요일
                  <Field
                    type="checkbox"
                    name="storeDayOff"
                    value="화요일"
                    className="h-12 w-full appearance-none"
                  />
                  화요일
                  <Field
                    type="checkbox"
                    name="storeDayOff"
                    value="수요일"
                    className="h-12 w-full appearance-none"
                  />
                  수요일
                  <Field
                    type="checkbox"
                    name="storeDayOff"
                    value="목요일"
                    className="h-12 w-full appearance-none"
                  />
                  목요일
                  <Field
                    type="checkbox"
                    name="storeDayOff"
                    value="금요일"
                    className="h-12 w-full appearance-none"
                  />
                  금요일
                  <Field
                    type="checkbox"
                    name="storeDayOff"
                    value="토요일"
                    className="h-12 w-full appearance-none"
                  />
                  토요일
                  <Field
                    type="checkbox"
                    name="storeDayOff"
                    value="일요일"
                    className="h-12 w-full appearance-none"
                  />
                  일요일
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
