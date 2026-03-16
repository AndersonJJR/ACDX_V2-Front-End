export interface LoginRequest {
  login: string;
  senha: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  token: string;
  type: string;
  expiresIn?: number;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  id: number;
  nome: string;
  email: string;
  message?: string;
}
