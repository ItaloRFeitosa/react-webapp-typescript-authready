import React, { createContext, useState, useContext, useEffect } from "react";

import {
  registerService,
  loginService,
  logoutService,
  LoginDto,
  RegisterDto,
} from "../services/auth.api";

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  isLogged: boolean;
  user: User | null;
  register(registerData: RegisterDto): void;
  login(loginData: LoginDto): void;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let storagedUser = localStorage.getItem("user");

    if (storagedUser) setUser(JSON.parse(storagedUser));
  }, []);

  function register(registerData: RegisterDto) {
    registerService(registerData).then((response) => {
      console.log(response);
      let { user } = response.data;
      setUser(user);

      localStorage.setItem("user", JSON.stringify(user));
    });
  }

  function login(loginData: LoginDto) {
    loginService(loginData).then((response) => {
      let { user } = response.data;
      setUser(user);

      localStorage.setItem("user", JSON.stringify(user));
    });
  }

  function logout() {
    logoutService().then(() => {
      localStorage.clear();
      setUser(null);
    });
  }
  return (
    <AuthContext.Provider
      value={{ isLogged: !!user, user, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
