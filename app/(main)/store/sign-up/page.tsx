'use client';
import PrimaryButton from '@/app/_components/PrimaryButton/PrimaryButton';
import GuideText from './components/GuildeText/GuildeText';
import Input from './components/Input/Input';
import NicknameInput from './components/NicknameInput/NicknameInput';
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
    trigger, // trigger 추가
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    const isNicknameValid = await trigger('Nickname');
    console.log('isNicknameValid', isNicknameValid);
    if (isNicknameValid) {
      console.log('됨!');
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

  const handleNicknameCheck = async () => {
    await trigger('Nickname'); // 닉네임 필드의 유효성 검사를 수동으로 실행
    console.log('nickname check');
  };
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
