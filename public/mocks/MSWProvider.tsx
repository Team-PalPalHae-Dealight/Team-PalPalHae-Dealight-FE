'use client';

import { type PropsWithChildren } from 'react';
import { initMocks } from '.';

const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

if (isMockingMode) {
  initMocks();
}

export const MSWProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
