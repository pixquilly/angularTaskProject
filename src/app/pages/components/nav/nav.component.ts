import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

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

  constructor(private router: Router){}
  language = 'EN';
  languages = [
    { label: 'EN', value: 'en' },
    { label: 'ES', value: 'es' }
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}