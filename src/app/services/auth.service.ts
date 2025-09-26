import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { IAuthService } from '../core/interfaces/auth-service.interface';
import { AuthResponse, LoginRequest } from '../core/interfaces/auth.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService implements IAuthService{
  private readonly TOKEN_KEY = 'auth_token';
  private _isAuthenticated = signal<boolean>(this.hasToken());
  readonly isLoggedIn = this._isAuthenticated.asReadonly();

  constructor(private http: HttpClient) {
    console.log("using REAL AUTH service.");
  }

  login(credentials: LoginRequest) {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, credentials).pipe(
      tap((res: AuthResponse) => {
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

}
