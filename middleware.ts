import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const middleware = async (request: NextRequest) => {
  try {
    const accessToken = 1;
    const refreshToken = 2;
    if (
      accessToken === 1 &&
      refreshToken === 2 &&
      request.url.includes('/login') === false
    ) {
      if (request.url.includes('/customer')) {
        return NextResponse.redirect(
          new URL('http://localhost:3000/customer/login')
        );
      }
      if (request.url.includes('/store')) {
        console.log('request.url', request.url);
        return NextResponse.redirect(
          new URL('http://localhost:3000/store/login')
        );
      }
    }
    if (accessToken !== 1 && refreshToken === 2) {
      //토큰 저장
      //서버에 보내기
      //받은 refresh token 저장하기
      //저장한 토큰 다시 헤더에 담기
    }
  } catch (error) {
    console.error(error);
  }
};

export default middleware;
