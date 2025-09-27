import {User} from '../interfaces/user.interface';

export type LoginUser = Omit<User, 'password'>;

export interface AuthResponse {
  token: string;
}