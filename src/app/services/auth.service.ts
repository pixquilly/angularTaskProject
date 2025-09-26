import { Injectable, signal } from '@angular/core';
import { of, delay, tap } from 'rxjs';
import { AuthResponse, LoginRequest } from '../core/models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private _isAuthenticated = signal<boolean>(this.hasToken());
  readonly isLoggedIn = this._isAuthenticated.asReadonly();

  login(credentials: LoginRequest) {
    return of({ token: 'fake-jwt-token-123' } as AuthResponse).pipe(
      delay(500),
      tap(() => {
        localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token-123');
        this._isAuthenticated.set(true);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this._isAuthenticated.set(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}