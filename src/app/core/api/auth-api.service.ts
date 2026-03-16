import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api-base-url.token';
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from '../../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, payload);
  }

  signup(payload: SignupRequest): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.baseUrl}/auth/signup`, payload);
  }
}
