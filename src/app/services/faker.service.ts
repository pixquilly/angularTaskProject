import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { delay, of } from 'rxjs';

export interface Task {
  client: string;
  task: string;
  status: 'Draft' | 'In Progress' | 'On Review' | 'Approved';
  receivedOn: string;
}

export interface ChartData {
  labels: string[];
  datasets: { label: string; data: number[]; borderColor: string; fill: boolean }[];
}

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  private statuses: Task['status'][] = ['Draft', 'In Progress', 'On Review', 'Approved'];

  generateTasks(count: number = 5): Task[] {
    return Array.from({ length: count }).map(() => {
      return {
        client: faker.person.fullName(),
        task: faker.lorem.words(faker.number.int({ min: 2, max: 4 })),
        status: faker.helpers.arrayElement(this.statuses),
        receivedOn: faker.date.recent({days: 30}).toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      };
    });
  }

  generateClientsChartData() {
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

  
}
