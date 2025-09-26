// src/app/core/tokens/auth.token.ts
import { InjectionToken } from '@angular/core';
import { IAuthService } from '../../services/fakeauth.service';

export const AUTH_SERVICE = new InjectionToken<IAuthService>('AuthService');