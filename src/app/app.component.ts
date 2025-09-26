import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TasksComponent } from "./pages/tasks/tasks.component";
import { HeaderComponent } from "./pages/components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoginComponent,
    DashboardComponent,
    TasksComponent,
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngTask';
}
