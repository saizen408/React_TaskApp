import React, { createContext } from 'react';
import { useAuthReducer } from '../hooks/useAuthReducer';
import authReducer from '../reducers/auth.reducer';

const defaultToken = { token: '', error: false };

export const UserContext = createContext();
export const AuthenticateContext = createContext();

export function UserProvider(props) {
  const [token, authenticate] = useAuthReducer(authReducer, defaultToken);
  return (
    <UserContext.Provider value={token}>
      <AuthenticateContext.Provider value={authenticate}>
        {props.children}
      </AuthenticateContext.Provider>
    </UserContext.Provider>
  );
}
