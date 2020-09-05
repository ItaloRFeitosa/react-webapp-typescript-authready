import api from './api';

export interface LoginDto{
  email: string;
  password: string;
}

export interface RegisterDto{
  name: string;
  email: string;
  password: string;
}

export async function loginService(loginData: LoginDto){
    const response = await api.post('auth/login', loginData)
    return response;
}


export async function logoutService(){
    const response = await api.post('auth/logout')
    return response;
}

export async function registerService(registerData: RegisterDto){
  const response = await api.post('auth/register', registerData)
  return response;
}

