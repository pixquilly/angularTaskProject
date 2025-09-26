import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { LoginRequest } from '../../core/interfaces/auth.interface';
import { AUTH_SERVICE } from '../../core/tokens/auth.token';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { IAuthService } from '../../core/interfaces/auth-service.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../../styles/pages/_login.scss'
  ],
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CommonModule,
    ReactiveFormsModule,
    CheckboxModule
  ]
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    @Inject(AUTH_SERVICE) private authService: IAuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.authService.login(this.loginForm.value as LoginRequest).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}