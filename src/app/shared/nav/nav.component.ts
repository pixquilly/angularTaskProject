import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { faker } from '@faker-js/faker';
import { AUTH_SERVICE } from '../../core/tokens/auth.token';
import { IAuthService } from '../../core/interfaces/auth-service.interface';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [
    RouterLink, 
    RouterLinkActive,
    FormsModule,
    MenuModule
  ]
})
export class NavComponent {

  profileItems: MenuItem[];

  constructor(
    private router: Router,
    @Inject(AUTH_SERVICE) private authService: IAuthService,
  ){
    this.profileItems = [
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.logout()
      }
    ];
    this.avatarUrl = faker.image.avatar(); 
  }
  
  avatarUrl: string;
  logoUrl: string = "https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"; //for some reason I could not import the logo neither from public or asset folders.

  language = 'en';
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