'use client';
import {
  ReactNode,
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

type UserInfoPropType = {
  nickname: string;
};

type AuthContextPropType = {
  userInfo: UserInfoPropType | null;
  setUserInfo: Dispatch<SetStateAction<UserInfoPropType | null>>;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
};

export const AuthContext = createContext<AuthContextPropType | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfoPropType | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ token, setToken, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
