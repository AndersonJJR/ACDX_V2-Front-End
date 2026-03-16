// src/app/auth/login/login.page.ts
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthApiService } from '../../core/api/auth-api.service';

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

  protected readonly loading = signal(false);
  protected readonly showPassword = signal(false);
  protected readonly serverMessage = signal('');

  protected readonly form = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [true],
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

    this.authApi.login(this.form.getRawValue())
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          this.serverMessage.set(`Login realizado com sucesso. Token: ${response.token}`);
        },
        error: () => {
          this.serverMessage.set('Não foi possível autenticar. Verifique suas credenciais.');
        },
      });
  }

  protected forgotPassword(): void {
    this.serverMessage.set('Fluxo de recuperação de senha ainda não implementado.');
  }
}
