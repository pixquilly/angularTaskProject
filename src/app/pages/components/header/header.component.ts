import { Component, Inject } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BaseIcon } from "primeng/baseicon";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { AUTH_SERVICE } from '../../../core/tokens/auth.token';

@Component({
  selector: 'app-header',
  imports: [
    NavComponent, 
    BaseIcon,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    @Inject(AUTH_SERVICE) private authService: AuthService
  ){}

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
