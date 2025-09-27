import { Observable } from 'rxjs';
import { AuthResponse, LoginUser } from './auth.interface';

export interface IAuthService {
  login(credentials: LoginUser): Observable<AuthResponse>;
  logout(): void;
  isLoggedIn: import('@angular/core').Signal<boolean>;
}