'use client';

import { ReactNode, createContext, useContext, useState } from 'react';
import LocalStorage from '../_utils/localstorage';
import { useQueryClient } from '@tanstack/react-query';
import { userInitialData } from './UserInfoProvider';

type TokensType = {
  accessToken: string;
  refreshToken: string;
};

type DefaultContextType = {
  loggedIn: boolean;
  login: ({ accessToken, refreshToken }: TokensType) => void;
  logout: () => void;
} | null;

const AuthContext = createContext<DefaultContextType>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setIsLoggedIn] = useState(
    !!LocalStorage.getItem('dealight-accessToken') ||
      !!LocalStorage.getItem('dealight-refreshToken')
  );

  const queryClient = useQueryClient();

  const login = async ({ accessToken, refreshToken }: TokensType) => {
    LocalStorage.setItem('dealight-accessToken', accessToken);
    LocalStorage.setItem('dealight-refreshToken', refreshToken);
    setIsLoggedIn(true);

    await queryClient.fetchQuery({ queryKey: ['user-info'] });
  };

  const logout = async () => {
    LocalStorage.removeItem('dealight-accessToken');
    LocalStorage.removeItem('dealight-refreshToken');
    setIsLoggedIn(false);

    queryClient.setQueryData(['user-info'], () => userInitialData);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const state = useContext(AuthContext);

  if (!state) {
    throw new Error('useAuth must be used within a Auth');
  }

  return state;
};
