import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    FormsModule,
    ChartModule,
    TableModule,
    CheckboxModule
  ]
})
export class DashboardComponent{
  language = 'en';
  tasks = [
    { client: 'Maram Alqadri', task: 'Garden Design', status: 'Draft', receivedOn: '02-02-2025 : 00:48 PM' },
    { client: 'Ahmed Rawy', task: 'Flora Studio', status: 'In Progress', receivedOn: '02-02-2025 : 00:48 PM' },
    { client: 'Ali Yahia', task: 'Testing Design', status: 'On Review', receivedOn: '02-02-2025 : 00:48 PM' },
    { client: 'Mohamed Ammar', task: 'Commerce Platform', status: 'Approved', receivedOn: '02-02-2025 : 00:48 PM' }
  ];

  clientsChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Clients',
      data: [40, 60, 80, 50, 100, 30, 70, 90, 60, 40, 80, 70],
      borderColor: '#1a73e8',
      fill: false
    }]
  };

  analyticsChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [40, 60, 80, 50, 100, 30, 70, 90, 60, 40, 80, 70],
        backgroundColor: '#1a73e8'
      },
      {
        label: 'Gross Margin',
        data: [60, 80, 100, 70, 120, 50, 90, 110, 80, 60, 100, 90],
        backgroundColor: '#6c757d'
      }
    ]
  };

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

  constructor(private router: Router) {}
}