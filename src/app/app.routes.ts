import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'tasks',
        loadChildren: () => import('./pages/tasks/tasks.component').then(m => m.TasksComponent),
        // canActivate: [authGuard]
    }

];