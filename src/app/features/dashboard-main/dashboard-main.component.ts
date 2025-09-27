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
import { TaskStatus } from '../../core/enums/task-status.enum';
import { Task } from '../../core/interfaces/task.interface';

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

  constructor(private router: Router, private fakeService: FakeService) {}

  tasks: Task[] = [];
  clientsChartData$!: Observable<ClientChartData>;
  analyticsChartData$!: Observable<AnalyticsChartData>;

  ngOnInit(): void {

    this.clientsChartData$ = this.fakeService.generateClientsChartData();
    this.analyticsChartData$ = this.fakeService.generateAnalyticsChartData();

    this.fakeService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });

  }

  language = 'en';

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

  getStatusClass(status: TaskStatus): string {
    switch (status) {
      case TaskStatus.Draft:
        return 'status-draft';
      case TaskStatus.InProgress:
        return 'status-in-progress';
      case TaskStatus.OnReview:
        return 'status-on-review';
      case TaskStatus.Approved:
        return 'status-approved';
      case TaskStatus.Rejected:
        return 'status-rejected';
      default:
        return '';
    }
  }
  
}