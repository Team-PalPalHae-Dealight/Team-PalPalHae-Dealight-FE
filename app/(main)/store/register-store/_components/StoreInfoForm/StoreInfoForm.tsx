'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { ERROR_MESSAGE } from '../../_constants/errorMessage';
import PrimaryButton from '../../../../../_components/PrimaryButton/PrimaryButton';
import pageRoute from '../../../../../_constants/route';
import { useRouter } from 'next/navigation';
import AddressButton from '../../../../../_components/AddressButton/AddressButton';
import { useState } from 'react';

type initialValuesType = {
  storeName: string;
  storePhone: string;
};

const StoreInfoForm = () => {
  const router = useRouter();
  const [addressError, setAddressError] = useState(true);
  const [click, setClick] = useState(false);

  const initialValues = {
    storeName: '',
    storePhone: '',
  };
  const schema = object().shape({
    storeName: string()
      .required(ERROR_MESSAGE.STORE_REQUIRED)
      .min(2, ERROR_MESSAGE.STORE_MIN),
    storePhone: string()
      .required(ERROR_MESSAGE.STORE_REQUIRED)
      .matches(/^[0-9]+$/, ERROR_MESSAGE.STORE_NUMBER)
      .length(10, ERROR_MESSAGE.STORE_LENGTH),
  });

  const submitForm = (values: initialValuesType) => {
    if (typeof window !== 'undefined') {
      const address = localStorage.getItem('dealight-storeAddress');
      if (address) setAddressError(false);
      if (!addressError) {
        localStorage.setItem('dealight-storeName', values.storeName);
        localStorage.setItem('dealight-storePhone', values.storePhone);
        router.push(pageRoute.store.registerStoreTime());
      }
    }

    setClick(true);
  };

  const handleAddressButton = (address: string) => {
    localStorage.setItem('dealight-storeAddress', address);
    setAddressError(false);
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
              <div>
                <label className="text-xs font-semibold" htmlFor="storeName">
                  업체 이름
                </label>
                <Field
                  type="text"
                  name="storeName"
                  className={`h-12 w-full rounded text-base text-black ${
                    formik.errors.storeName ? 'border-red' : 'border-yellow'
                  } bg-white pl-3 outline-none focus:border-2`}
                  placeholder="세븐일레븐"
                />
                <ErrorMessage
                  name="storeName"
                  component="span"
                  className="w-full text-left text-xs text-red"
                />
              </div>
              <div className="mt-5">
                <label
                  className="mt-5 text-xs font-semibold text-black"
                  htmlFor="storePhone"
                >
                  업체 전화번호
                </label>
                <Field
                  type="text"
                  name="storePhone"
                  className={`h-12 w-full rounded text-base text-black ${
                    formik.errors.storePhone ? 'border-red' : 'border-yellow'
                  } bg-white pl-3 outline-none focus:border-2`}
                  placeholder="0311234567"
                />
                <ErrorMessage
                  name="storePhone"
                  component="span"
                  className="w-full text-left text-xs text-red"
                />
              </div>
              <div className="mt-5">
                <label className="text-xs font-semibold" htmlFor="storeAddress">
                  업체 주소
                </label>
                <div className="flex gap-x-2">
                  <div
                    className={`base-2/5 h-12 w-full rounded bg-white py-3 pl-3 text-base text-black outline-none`}
                  >
                    {localStorage.getItem('dealight-storeAddress')}
                  </div>
                  <AddressButton
                    getAddress={handleAddressButton}
                    className="base-3/5 h-12 min-w-fit rounded bg-yellow px-1 text-sm"
                  >
                    주소찾기
                  </AddressButton>
                </div>
                {click && addressError && (
                  <div className="w-full text-left text-xs text-red">
                    {ERROR_MESSAGE.STORE_REQUIRED}
                  </div>
                )}
              </div>
              <div className="mb-7 mt-24 flex justify-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
              </div>
              <PrimaryButton type="submit">다음</PrimaryButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default StoreInfoForm;
