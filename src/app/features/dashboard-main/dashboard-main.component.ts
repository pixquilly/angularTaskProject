import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { FakeService } from '../../core/services/faker.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AnalyticsChartData, ClientChartData } from '../../core/interfaces/chart.interface';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-main.component.html',
  imports: [
    FormsModule,
    ChartModule,
    TableModule,
    CheckboxModule,
    AsyncPipe,
    RouterOutlet,
    CommonModule,
    ChartModule,
    TableModule,
    ChartModule,
    CheckboxModule,
    AvatarModule,
    TagModule,
    ButtonModule,
    CardModule
  ]
})
export class DashboardMainComponent{

  constructor(private router: Router, private fakerService: FakeService) {
    
    this.avatarUrls = this.fakerService.generateUserAvatars(100);
    this.tasks = this.fakerService.generateTasks(100);

    this.clientsChartData$ = this.fakerService.generateClientsChartData();

    this.analyticsChartData$ = this.fakerService.generateAnalyticsChartData();

  }

  avatarUrls: string[];
  tasks;
  clientsChartData$: Observable<ClientChartData>;

  language = 'en';

  analyticsChartData$: Observable<AnalyticsChartData>;

  chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Draft': return 'status-draft';
      case 'In Progress': return 'status-in-progress';
      case 'On Review': return 'status-on-review';
      case 'Approved': return 'status-approved';
      default: return '';
    }
  }
  
}