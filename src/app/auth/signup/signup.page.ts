// src/app/auth/signup/signup.page.ts
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthApiService } from '../../core/api/auth-api.service';


@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.page.html',
  styleUrl: './signup.page.scss',
})
export class SignupPage {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly authApi = inject(AuthApiService);
  private readonly router = inject(Router);

  protected readonly loading = signal(false);
  protected readonly showPassword = signal(false);
  protected readonly serverMessage = signal('');
  protected readonly signupSuccess = signal(false);

  protected readonly form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
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

    this.authApi.signup(this.form.getRawValue())
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          this.signupSuccess.set(true);
          this.serverMessage.set(
            `${response} Verifique seu email para ativar a conta antes de fazer login. Redirecionando para o login...`
          );
          this.form.reset({
            username: '',
            email: '',
            password: '',
          });

          // Redireciona para a tela de login após 5 segundos
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 5000);
        },
        error: (err) => {
          console.log('Erro no cadastro: ', err);
          this.signupSuccess.set(false);
          this.serverMessage.set('Não foi possível concluir o cadastro.');
        },
      });
  }
}
