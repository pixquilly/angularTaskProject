import { Routes } from '@angular/router';
import { authGuard } from './core/models/guards/auth.guard';

export const routes: Routes = [

    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [authGuard]
    },
    {
        path: 'tasks',
        loadComponent: () => import('./pages/tasks/tasks.component').then(m => m.TasksComponent),
        canActivate: [authGuard]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];