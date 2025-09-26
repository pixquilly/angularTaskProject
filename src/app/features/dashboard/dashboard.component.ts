import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { FakeService } from '../../core/services/faker.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AnalyticsChartData, ClientChartData } from '../../core/interfaces/chart.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    RouterOutlet
  ]
})
export class DashboardComponent{

  constructor() {}
 
}