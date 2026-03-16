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
  nome: string;
  email: string;
  senha: string;
}

export interface SignupResponse {
  id: number;
  nome: string;
  email: string;
  message?: string;
}
