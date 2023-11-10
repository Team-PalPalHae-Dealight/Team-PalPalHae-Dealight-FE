'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

const LogContext = createContext({ loggedin: false, loginToggle: () => {} });

export const LogContextProvider = ({ children }: { children: ReactNode }) => {
  const [loggedin, setLogin] = useState(false);
  const loginToggle = () => {
    setLogin(prev => !prev);
  };

  return (
    <LogContext.Provider value={{ loggedin, loginToggle }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LogContext);
};
