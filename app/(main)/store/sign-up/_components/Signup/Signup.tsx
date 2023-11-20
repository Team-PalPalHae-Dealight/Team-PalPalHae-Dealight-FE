'use client';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

interface IFormInput {
  realname: string;
  nickName: string;
  phoneNumber: string;
}

export default function Signup() {
  const [isNicknameValid, setisNicknameValid] = useState(false);
  const schema = yup.object().shape({
    realname: yup.string().required('이름을 입력해주세요'),
    nickName: yup.string().required('닉네임을 입력해주세요'),
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
    console.log('data', data);
    if (isNicknameValid === true) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MDAwMDAyIiwiaXNzIjoiREVBTElHSFQtQVBJLVNFUlZFUiIsImlhdCI6MTY5OTgzODIzNywiZXhwIjo5OTk5OTk5OTk5LCJBdXRob3JpdGllcyI6IlJPTEVfU1RPUkUifQ.4AddVJWedO0aV0iMPOpdnp83-ZJQ33k69wc1QkN5wo8',
          },
          body: JSON.stringify({
            provider: 'kakao',
            providerId: '3148882014',
            realName: data.realname,
            nickName: data.nickName,
            phoneNumber: data.phoneNumber,
            role: 'store',
          }),
        }
      );
      if (!response.ok) {
        throw new Error('알 수 없는 에러');
      }
      const val = await response.json();
      console.log(val);
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
        <div>
          <label>
            <div className="py-3 text-xs">이름</div>
            <div className="h-12  rounded  border-white bg-white">
              <input
                {...register('realname')}
                className={`h-12 w-full rounded bg-light-gray text-sm text-dark-gray ${
                  errors.nickName ? 'border-red' : 'border-yellow'
                } cursor-pointer pl-3 outline-none focus:border-2`}
              />
            </div>
          </label>

          {errors.realname && (
            <span className=" text-xs font-semibold text-red">
              이름을 입력해주세요
            </span>
          )}
        </div>
      </form>
      <form className="flex w-5/6 flex-col " onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div className="text-xs ">닉네임</div>
          <div className="flex flex-row ">
            <div className="flex  h-12  flex-row rounded border-white bg-white">
              <input
                {...register('nickName')}
                className={`h-12 w-60 rounded bg-light-gray text-sm text-dark-gray ${
                  errors.nickName ? 'border-red' : 'border-yellow'
                } cursor-pointer pl-3 outline-none focus:border-2`}
              />
            </div>
            <div className=" min-w-fit  px-1">
              <PrimaryButton type="submit" onClick={handleNicknameCheck}>
                중복확인
              </PrimaryButton>
            </div>
          </div>
        </label>
        {errors.nickName && (
          <div>
            {' '}
            <span className=" text-xs text-red">닉네임을 입력해주세요</span>
          </div>
        )}
        <div>
          <label className="text-xs">전화번호</label>
          <div className="h-12  rounded  border-white bg-white">
            <input
              {...register('phoneNumber')}
              className={`h-12 w-full rounded bg-light-gray text-sm text-dark-gray ${
                errors.nickName ? 'border-red' : 'border-yellow'
              } cursor-pointer pl-3 outline-none focus:border-2`}
            />
          </div>
        </div>
        <div>
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
