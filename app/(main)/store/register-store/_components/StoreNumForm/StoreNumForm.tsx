'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { ERROR_MESSAGE } from '../../_constants/errorMessage';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import pageRoute from '@/app/_constants/route';
import { useRouter } from 'next/navigation';

type initialValuesType = {
  storeNumber: string;
};

const StoreNumForm = () => {
  const router = useRouter();

  const initialValues = {
    storeNumber: '',
  };
  const schema = object().shape({
    storeNumber: string()
      .required(ERROR_MESSAGE.STORE_REQUIRED)
      .matches(/^[0-9]+$/, ERROR_MESSAGE.STORE_NUMBER)
      .length(10, ERROR_MESSAGE.STORE_LENGTH),
  });

  const submitForm = (values: initialValuesType) => {
    localStorage.setItem('dealight-storeNumber', values.storeNumber);
    router.push(pageRoute.store.registerStoreInfo());
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-11 mt-52 w-full text-center text-sm font-semibold">
        간편하게 등록하고
        <br /> 딜라잇(Dealight) 서비스를 이용해보세요
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={submitForm}
      >
        {formik => {
          return (
            <Form>
              <label className="text-xs font-semibold" htmlFor="storeNumber">
                사업자 등록번호
              </label>
              <Field
                type="text"
                name="storeNumber"
                className={`h-12 w-full rounded ${
                  formik.errors.storeNumber ? 'border-red' : 'border-yellow'
                } bg-white pl-3 outline-none focus:border-2`}
                placeholder="1007999997"
              />
              <ErrorMessage
                name="storeNumber"
                component="span"
                className="w-full text-left text-xs text-red"
              />
              <div className="mb-7 mt-44 flex justify-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-yellow"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-dark-gray"></div>
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

export default StoreNumForm;
