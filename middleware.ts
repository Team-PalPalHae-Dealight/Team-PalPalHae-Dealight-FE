import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const middleware = async (request: NextRequest) => {
  try {
    const accessToken = 1;
    const refreshToken = 2;
    switch (request.url.includes('/customer')) {
      case request.url.includes('/cart'):
        break;
      case request.url.includes('/home'):
        break;
      case request.url.includes('/login'):
        break;
      case request.url.includes('/my-page'):
        break;
      case request.url.includes('/order-detail'):
        break;
      case request.url.includes('/order-list'):
        break;
      case request.url.includes('/order-product'):
        break;
      case request.url.includes('/order-result'):
        break;
      case request.url.includes('/review'):
        break;
      case request.url.includes('/review-write'):
        break;
      case request.url.includes('/search'):
        break;
      case request.url.includes('/sign-up'):
        break;
      case request.url.includes('/store-detail'):
        break;
    }
    if (request.url.includes('/store')) {
      if (refreshToken !== null && request.url.includes('/login'))
        //로그인 하고 로그인 페이지 접근시
        return NextResponse.redirect(new URL(request.url));
      if (accessToken === null && refreshToken === null) {
        return NextResponse.redirect(
          new URL('http://localhost:3000/store/login')
        );
      } else if (accessToken === null && refreshToken !== null) {
        //refresh token 전송
        //받은 토큰 로컬 스토리지에 저장
        //저장한 토큰 헤더에 담아서 전송
      } else if (accessToken !== null && refreshToken !== null) {
        //헤더에 토큰 담아서 전송
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export default middleware;
