import { Injectable, signal } from '@angular/core';
import { of, delay, tap, Observable } from 'rxjs';
import { IAuthService } from '../core/interfaces/auth-service.interface';
import { AuthResponse, LoginRequest } from '../core/interfaces/auth.interface';


@Injectable()
export class FakeAuthService implements IAuthService{
  private readonly TOKEN_KEY = 'auth_token';
  private _isAuthenticated = signal<boolean>(this.hasToken());
  readonly isLoggedIn = this._isAuthenticated.asReadonly();

  login(credentials: LoginRequest) {
    const fakeResponse: AuthResponse = { token: `fake-jwt-${Math.random().toString(36).substring(2)}` };

    return of(fakeResponse).pipe(
      delay(500),
      tap((res) => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
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

  constructor(){
    console.log("using FAKE AUTH service.");
  }
}
