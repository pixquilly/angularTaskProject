import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    TableModule,
    CheckboxModule
  ]
})
export class TasksComponent {
  language = 'en';
  selectedStatus = '';
  selectedTaskName = '';
  selectedSort = '';
  selectedPerPage = '5';

  overviewCards = [
    { status: 'In Progress', statusClass: 'status-in-progress', value: '300', label: 'Super Admin Role' },
    { status: 'Draft', statusClass: 'status-draft', value: '104', label: 'Client Role' },
    { status: 'On Review', statusClass: 'status-on-review', value: '200', label: 'Super Admin Role' },
    { status: 'Approved', statusClass: 'status-approved', value: '30', label: 'Super Admin Role' },
    { status: 'Rejected', statusClass: 'status-rejected', value: '800', label: 'Super Admin Role' }
  ];

  statusOptions = [{ label: 'All', value: '' }, { label: 'In Progress', value: 'in-progress' }];
  taskNameOptions = [{ label: 'All', value: '' }, { label: 'Garden Design', value: 'garden' }];
  sortOptions = [{ label: 'Date Asc', value: 'asc' }, { label: 'Date Desc', value: 'desc' }];
  perPageOptions = [{ label: '5', value: '5' }, { label: '10', value: '10' }];

  tasks = [
    { client: 'Maram Alqadri', task: 'Garden Design', status: 'Draft', receivedOn: '02-02-2025 : 00:48 PM' },
    { client: 'Ahmed Rawy', task: 'Flora Studio', status: 'In Progress', receivedOn: '02-02-2025 : 00:48 PM' },
    { client: 'Ali Yahia', task: 'Testing Design', status: 'On Review', receivedOn: '02-02-2025 : 00:48 PM' },
    { client: 'Mohamed Ammar', task: 'Commerce Platform', status: 'Approved', receivedOn: '02-02-2025 : 00:48 PM' },
    { client: 'Sara Adel', task: 'Shopping Platform', status: 'Rejected', receivedOn: '02-02-2025 : 00:48 PM' }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'Draft': return 'status-draft';
      case 'In Progress': return 'status-in-progress';
      case 'On Review': return 'status-on-review';
      case 'Approved': return 'status-approved';
      case 'Rejected': return 'status-rejected';
      default: return '';
    }
  }

  constructor(){
    this.avatarUrl = faker.image.avatar()
  }
  avatarUrl;
}