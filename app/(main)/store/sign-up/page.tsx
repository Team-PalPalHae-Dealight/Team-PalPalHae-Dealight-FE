'use client';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import GuideText from './components/GuideText';
import Input from './components/Input';
import NicknameInput from './components/NicknameInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInput {
  name: string;
  Nickname: string;
  phoneNumber: string;
}

export default function Page() {
  const schema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    Nickname: yup.string().required('Name is a required field'),
    phoneNumber: yup
      .string()
      .required('Phone is a required field')
      .matches(
        /^(\+\d{1,2}\s?)?1?\.?\s?\(?\d{3}\)?[\s.-]?\d{4}[\s.-]?\d{4}$/,
        'Invalid phone number format'
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<IFormInput> = async data =>
    // res = fetch();
    console.log(data, 'check data');

  return (
    <main className="flex flex-col items-center px-5 pt-2.5 font-semibold">
      <GuideText />
      <form className="flex w-5/6 flex-col " onSubmit={handleSubmit(onSubmit)}>
        <div className="py-3">
          <Input nameProp="이름" props={register('name')} />
          {errors.name && (
            <span className=" text-xs text-red">이름을 입력해주세요</span>
          )}
        </div>
        <NicknameInput nameProp={'닉네임'} props={register('Nickname')} />
        {errors.Nickname && (
          <span className=" text-xs text-red">닉네임을 입력해주세요</span>
        )}
        <div className="py-3">
          <Input nameProp="전화번호" props={register('phoneNumber')} />
          {errors.phoneNumber && (
            <span className=" text-xs text-red">전화번호를 입력해주세요</span>
          )}
        </div>
        <div className="py-10">
          <PrimaryButton type="submit" onClick={() => handleSubmit(onSubmit)}>
            회원가입
          </PrimaryButton>
        </div>
      </form>
    </main>
  );
}
