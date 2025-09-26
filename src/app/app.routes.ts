import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [authGuard],
        children: [
            {
            path: '', // default child route for /dashboard
            loadComponent: () =>
                import('./features/dashboard-main/dashboard-main.component').then(
                m => m.DashboardMainComponent
                ),
            canActivate: [authGuard],
            },
            {
            path: 'tasks', // /dashboard/tasks
            loadComponent: () =>
                import('./features/tasks/tasks.component').then(m => m.TasksComponent),
            canActivate: [authGuard],
            }
        ]
        },
    {
        path: 'login',
        loadComponent: () =>
            import('../app/features/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
