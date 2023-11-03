import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const middleware = async (request: NextRequest) => {
  const BASEURL = 'http://localhost:3001';

  // const authHeader = request.headers.get('Authorization');
  const accessToken = 1;
  try {
    if (request.url.includes('/customer')) {
      if (request.nextUrl.pathname === '/customer/login') {
        if (accessToken === null) {
          return NextResponse.next();
        } else if (accessToken !== null) {
          return NextResponse.redirect(new URL(BASEURL + '/customer/sign-up'));
        }
      }
      if (request.url.includes('/sign-up') && accessToken !== null) {
        return NextResponse.redirect(new URL(BASEURL + '/customer/home'));
      }
      if (!request.url.includes('/home') || !request.url.includes('/search')) {
        if (accessToken === null) {
          return NextResponse.redirect(new URL(BASEURL + '/customer/login'));
        }
      }
    }
  } catch (error) {
    //refresh token 처리?
    console.error(error);
  }
};

export default middleware;
