// src/app/auth/login/login.page.ts
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthApiService } from '../../core/api/auth-api.service';
import { AuthStateService } from '../../core/api/auth-state.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly authApi = inject(AuthApiService);
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);

  protected readonly loading = signal(false);
  protected readonly showPassword = signal(false);
  protected readonly serverMessage = signal('');
  protected readonly isError = signal(false);

  protected readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  protected togglePassword(): void {
    this.showPassword.update((value) => !value);
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.serverMessage.set('');
    this.isError.set(false);

    this.authApi.login(this.form.getRawValue())
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          this.authState.saveAuth(response);
          this.serverMessage.set('Login realizado com sucesso! Redirecionando...');
          this.isError.set(false);

          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
        },
        error: (err) => {
          this.isError.set(true);
          if (err.status === 401) {
            this.serverMessage.set(
              'Não foi possível autenticar. Verifique suas credenciais ou se sua conta já foi verificada por email.'
            );
          } else {
            this.serverMessage.set('Erro ao realizar login. Tente novamente mais tarde.');
          }
        },
      });
  }

  protected forgotPassword(): void {
    this.serverMessage.set('Fluxo de recuperação de senha ainda não implementado.');
    this.isError.set(true);
  }
}
