export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  authenticationToken: string;
  refreshToken: string;
  expiresAt: string;
  username: string;
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
