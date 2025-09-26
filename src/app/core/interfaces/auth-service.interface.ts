import { Observable } from 'rxjs';
import { AuthResponse, LoginRequest } from './auth.interface';

export interface IAuthService {
  login(credentials: LoginRequest): Observable<AuthResponse>;
  logout(): void;
  isLoggedIn: import('@angular/core').Signal<boolean>;
}