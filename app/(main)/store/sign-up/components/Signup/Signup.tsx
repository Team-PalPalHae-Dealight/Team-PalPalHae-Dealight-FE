'use client';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import Input from '../Input/Input';
import NicknameInput from '../NicknameInput/NicknameInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
interface IFormInput {
  name: string;
  Nickname: string;
  phoneNumber: string;
}

export default function Signup() {
  const [isNicknameValid, setisNicknameValid] = useState(false);
  const schema = yup.object().shape({
    name: yup.string().required('이름을 입력해주세요'),
    Nickname: yup.string().required('닉네임을 입력해주세요'),
    phoneNumber: yup
      .string()
      .required('-을 제외한 11개의 숫자를 입력해주세요')
      .matches(
        /^(\+\d{1,2}\s?)?1?\.?\s?\(?\d{3}\)?[\s.-]?\d{4}[\s.-]?\d{4}$/,
        '-을 제외한 11개의 숫자를 입력해주세요'
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    if (isNicknameValid === true) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MDAwMDAxIiwiaXNzIjoiREVBTElHSFQtQVBJLVNFUlZFUiIsImlhdCI6MTY5OTgzODEzOSwiZXhwIjoxNjk5OTI0NTM5LCJBdXRob3JpdGllcyI6IlJPTEVfTUVNQkVSIn0.wowAMfaK7bjn4XWhOmkBpgmlR-atvAHSx1klB6lNq8w',
          },
          body: JSON.stringify({
            provider: 'kakao',
            providerId: 12345,
            realName: data.name,
            nickName: data.Nickname,
            phoneNumber: data.phoneNumber,
            role: 'store',
          }),
        }
      );
      if (!response.ok) {
        throw new Error('알 수 없는 에러');
      }
      alert('회원가입이 완료되었습니다!');
    } else {
      alert('닉네임 중복 확인을 해주세요!');
    }
  };

  const handleNicknameCheck = () => {
    setisNicknameValid(true);
  };
  return (
    <>
      <form className="flex w-5/6 flex-col " onSubmit={handleSubmit(onSubmit)}>
        <div className="py-3">
          <Input nameProp="이름" props={register('name')} />
          {errors.name && (
            <span className=" text-xs font-semibold text-red">
              이름을 입력해주세요
            </span>
          )}
        </div>
        <NicknameInput
          nameProp={'닉네임'}
          registerProp={register('Nickname')}
          handleClick={handleNicknameCheck}
        />
        {errors.Nickname && (
          <span className=" text-xs text-red">닉네임을 입력해주세요</span>
        )}
        <div className="py-3">
          <Input nameProp="전화번호" props={register('phoneNumber')} />
          {errors.phoneNumber && (
            <span className=" text-xs text-red">
              -을 제외한 11개의 숫자를 입력해주세요
            </span>
          )}
        </div>
        <div className="py-10">
          <PrimaryButton type="submit" onClick={() => handleSubmit(onSubmit)}>
            회원가입
          </PrimaryButton>
        </div>
      </form>
    </>
  );
}
