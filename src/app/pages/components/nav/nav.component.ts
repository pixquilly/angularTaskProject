import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { faker } from '@faker-js/faker';
import { AuthService } from '../../../services/auth.service';
import { AUTH_SERVICE } from '../../../core/tokens/auth.token';
import { IAuthService } from '../../../services/fakeauth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [
    RouterLink, 
    RouterLinkActive,
    FormsModule
  ]
})
export class NavComponent {

  constructor(
    private router: Router,
    @Inject(AUTH_SERVICE) private authService: IAuthService,
  ){
    
    this.avatarUrl = faker.image.avatar(); 
  }
  
  avatarUrl;

  language = 'EN';
  languages = [
    { label: 'EN', value: 'en' },
    { label: 'ES', value: 'es' }
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}