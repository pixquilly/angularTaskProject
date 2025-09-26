import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard-main/dashboard-main.component').then(m => m.DashboardMainComponent)
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('../tasks/tasks.component').then(m => m.TasksComponent)
      }
    ]
  }
];