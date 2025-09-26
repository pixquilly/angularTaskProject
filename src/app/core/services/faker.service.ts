import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { delay, Observable, of } from 'rxjs';
import { TaskStatus } from '../enums/task-status.enum';
import { Task } from '../interfaces/task.interface';
import { AnalyticsChartData, ClientChartData } from '../interfaces/chart.interface';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  
  private statuses: Task['status'][] = [TaskStatus.Draft, TaskStatus.InProgress, TaskStatus.OnReview, TaskStatus.Approved];

  generateTasks(count: number = 5): Task[] {
  return Array.from({ length: count }).map(() => ({
    client: faker.person.fullName(),
    task: faker.lorem.words(faker.number.int({ min: 2, max: 4 })),
    status: faker.helpers.arrayElement(this.statuses),
    receivedOn: faker.date.recent({ days: 30 }).toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
    avatar: this.generateUserAvatar()
  }));
}

  generateClientsChartData(): Observable<ClientChartData> {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const data = months.map(() =>
      Math.floor(Math.random() * 80) + 20 // random value between 20–100
    );

    return of({
      labels: months,
      datasets: [{
        label: 'Clients',
        data: data,
        borderColor: '#1a73e8',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.4
      }]
    }).pipe(delay(300)); // simulate API latency
  }

  generateAnalyticsChartData(): Observable<AnalyticsChartData> {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const revenueData = months.map(() =>
      Math.floor(Math.random() * 90) + 30 // 30–120
    );

    const marginData = revenueData.map(val =>
      val + Math.floor(Math.random() * 30) + 10 // always higher than revenue
    );

    return of({
      labels: months,
      datasets: [
        {
          label: 'Revenue',
          data: revenueData,
          backgroundColor: '#1a73e8'
        },
        {
          label: 'Gross Margin',
          data: marginData,
          backgroundColor: '#6c757d'
        }
      ]
    }).pipe(delay(300)); // simulate API latency
  }

  generateUserAvatar(): string{
    return faker.image.avatar();
  }

  generateUserAvatars(count: number = 5): string[] {
    return Array.from({ length: count }).map(() => this.generateUserAvatar());
  }
}
