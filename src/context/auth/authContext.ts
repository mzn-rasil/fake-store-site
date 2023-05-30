import { createContext } from 'react';

export interface IAuthUser {
  token: string | null;
  username: string;
}

interface IAuthContext {
  authUser: IAuthUser | null;
  onLogin: (authUser: IAuthUser) => void;
  onLogout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  //   token: null,
  authUser: {
    token: null,
    username: '',
  },
  onLogin: () => {},
  onLogout: () => {},
});
