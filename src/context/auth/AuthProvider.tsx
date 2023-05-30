import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, IAuthUser } from './authContext';

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authUser, setAuthUser] = useState<IAuthUser | null>(() => {
    try {
      let token = localStorage.getItem('token');
      let username = localStorage.getItem('username');
      return token && username ? { token, username } : null;
    } catch (error) {
      return null;
    }
  });
  const navigate = useNavigate();

  const onLogin = (authUser: IAuthUser) => {
    try {
      localStorage.setItem('token', authUser.token!);
      localStorage.setItem('username', authUser?.username);
      setAuthUser(authUser);
      navigate('/');
    } catch (error: any) {
      throw new Error('Cannot set token');
    }
  };

  const onLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      setAuthUser(null);
      navigate('/');
    } catch (error: any) {
      throw new Error('Cannot logout. Please try again.');
    }
  };

  const value = {
    authUser,
    onLogin,
    onLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
