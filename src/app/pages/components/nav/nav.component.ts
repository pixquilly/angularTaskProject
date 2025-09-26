import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { faker } from '@faker-js/faker';
import { AuthService } from '../../../services/auth.service';

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
    private authService: AuthService,
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