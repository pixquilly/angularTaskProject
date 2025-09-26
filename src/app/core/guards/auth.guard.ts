import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_SERVICE } from '../tokens/auth.token';
import { AuthService } from '../../services/auth.service';


export const authGuard = () => {
  const authService = inject(AUTH_SERVICE) as AuthService;
  const router = inject(Router);

  return authService.isLoggedIn() || router.createUrlTree(['/login']);
};
