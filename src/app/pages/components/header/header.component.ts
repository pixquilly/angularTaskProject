import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BaseIcon } from "primeng/baseicon";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

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
  constructor(private authService: AuthService){}

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
