'use client';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { axiosInstance } from '@/app/_services/apiClient';
import { useRouter } from 'next/navigation';
import LocalStorage from '@/app/_utils/localstorage';
import pageRoute from '@/app/_constants/path';
import { useAuth } from '@/app/_providers/AuthProvider';
import CustomPopUp from '@/app/_components/pop-up/CustomPopUp';

interface IFormInput {
  realname: string;
  nickName: string;
  phoneNumber: string;
}

export default function Signup() {
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [doCheck, setDoCheck] = useState(false);
  const [dobuleCheck, setIsDoubleCheck] = useState(false);
  const [dobuleCheckfail, setIsDbuleCheckfail] = useState(false);
  const [success, setIsSuccess] = useState(false);
  const [notEmpty, setIsnotEmpty] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const schema = yup.object().shape({
    realname: yup
      .string()
      .required('이름을 입력해주세요')
      .matches(/^[^\s]*$/i, '공백은 안됩니다'),
    nickName: yup
      .string()
      .required('닉네임을 입력해주세요')
      .matches(/^[^\s]*$/i, '공백은 안됩니다'),
    phoneNumber: yup
      .string()
      .required('-을 제외한 11개의 숫자를 입력해주세요')
      .matches(/^[0-9]{11}$/i, '-을 제외한 11개의 숫자를 입력해주세요')
      .length(11, '11개의 숫자를 입력해주세요'),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    if (isNicknameValid === false) {
      alert('닉네임 중복 검사 하세요');
      setDoCheck(true);
    }
    if (isNicknameValid === true) {
      const { provider, providerId } = LocalStorage.getItem('dealight-signup');

      try {
        const {
          data: { accessToken, refreshToken },
        } = await axiosInstance.post('auth/signup', {
          provider: provider,
          providerId: providerId,
          realName: data.realname,
          nickName: data.nickName,
          phoneNumber: data.phoneNumber,
          role: 'store',
        });
        login({ accessToken, refreshToken });
        LocalStorage.removeItem('dealight-signup');
        setIsSuccess(true);
        if (LocalStorage.getItem('dealight-lastLoginPage') === 'customer') {
          router.push(pageRoute.customer.home());
          return;
        }
        if (LocalStorage.getItem('dealight-lastLoginPage') === 'store') {
          router.push(pageRoute.store.home());
          return;
        }
      } catch (error) {
        if (error.message === 'Request failed with status code 400') {
          alert('닉네임이 중복되었습니다');
        }
      }
    }
  };
  const handleNicknameCheck = async () => {
    try {
      const watchNickName = watch('nickName');
      await axiosInstance.post('auth/duplicate', {
        nickName: watchNickName,
      });
      setIsNicknameValid(true);
      setIsDoubleCheck(true);
    } catch (error) {
      if (error.message === 'Request failed with status code 400') {
        setIsDbuleCheckfail(true);
      }
    }
  };

  return (
    <>
      {doCheck && (
        <CustomPopUp
          mainText={'닉네임 중복 검사하세요'}
          subText={''}
          btnText={'확인'}
          btnClick={() => {
            setDoCheck(false);
          }}
        />
      )}
      {dobuleCheck && (
        <CustomPopUp
          mainText={'닉네임 검사 통과'}
          subText={''}
          btnText={'확인'}
          btnClick={() => {
            setIsDoubleCheck(false);
          }}
        />
      )}
      {success && (
        <CustomPopUp
          mainText={'회원가입이 완료되었습니다!'}
          subText={''}
          btnText={'확인'}
          btnClick={() => {
            setIsSuccess(false);
          }}
        />
      )}
      {dobuleCheckfail && (
        <CustomPopUp
          mainText={'닉네임이 중복되었습니다'}
          subText={''}
          btnText={'확인'}
          btnClick={() => {
            setIsDbuleCheckfail(false);
          }}
        />
      )}
      {notEmpty && (
        <CustomPopUp
          mainText={'닉네임 빈값은 안됩니다'}
          subText={''}
          btnText={'확인'}
          btnClick={() => {
            setIsnotEmpty(false);
          }}
        />
      )}
      <form className="flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <div className="pt-3 text-xs font-semibold">이름</div>
            <div className="h-12  rounded  border-white bg-white">
              <input
                {...register('realname')}
                placeholder="이름"
                className={`h-12 w-full rounded bg-light-gray text-xs font-normal ${
                  errors.realname ? 'border-red' : 'border-yellow'
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
      <form className="flex w-full flex-col " onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div className="pt-3 text-xs font-semibold">닉네임</div>
          <div className="flex gap-x-2">
            <div className="flex  h-12 w-full flex-row gap-2 rounded border-white bg-white">
              <input
                {...register('nickName')}
                placeholder="딜라잇"
                className={`base-2/5 h-12 w-full rounded  bg-light-gray text-xs font-normal ${
                  errors.nickName ? 'border-red' : 'border-yellow'
                } cursor-pointer pl-3 outline-none focus:border-2`}
              />
            </div>
            <div className="min-w-fit">
              <PrimaryButton type="button" onClick={handleNicknameCheck}>
                <div className="px-2 text-xs font-normal">중복확인</div>
              </PrimaryButton>
            </div>
          </div>
        </label>
        {isNicknameValid && errors.nickName && (
          <span className=" text-xs text-red">닉네임을 입력해주세요</span>
        )}
        {!isNicknameValid && errors.nickName && (
          <span className=" text-xs text-red"> {errors.nickName.message}</span>
        )}
        <div className="w-full pt-3">
          <label className="text-xs font-semibold">전화번호</label>
          <div className="h-12 w-full rounded  border-white bg-white">
            <input
              {...register('phoneNumber')}
              placeholder="01012345678"
              className={`h-12 w-full rounded bg-light-gray text-xs font-normal ${
                errors.phoneNumber ? 'border-red' : 'border-yellow'
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
