import { Injectable } from '@angular/core';
import { LoginResponse } from '../../models/auth.models';

const STORAGE_KEYS = {
  TOKEN: 'authenticationToken',
  REFRESH_TOKEN: 'refreshToken',
  EXPIRES_AT: 'expiresAt',
  USERNAME: 'username',
} as const;

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {

  saveAuth(response: LoginResponse): void {
    localStorage.setItem(STORAGE_KEYS.TOKEN, response.authenticationToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, response.refreshToken);
    localStorage.setItem(STORAGE_KEYS.EXPIRES_AT, response.expiresAt);
    localStorage.setItem(STORAGE_KEYS.USERNAME, response.username);
  }

  getToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  getUsername(): string | null {
    return localStorage.getItem(STORAGE_KEYS.USERNAME);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    const expiresAt = localStorage.getItem(STORAGE_KEYS.EXPIRES_AT);

    if (!token || !expiresAt) {
      return false;
    }

    return new Date(expiresAt) > new Date();
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.EXPIRES_AT);
    localStorage.removeItem(STORAGE_KEYS.USERNAME);
  }
}
