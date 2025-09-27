import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { Task } from '../../core/interfaces/task.interface';
import { OverviewCard } from '../../core/interfaces/overview-card.interface';
import { FakeService } from '../../core/services/faker.service';
import { TaskStatus } from '../../core/enums/task-status.enum';
import { StatusOptions } from '../../core/interfaces/status-options.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    TableModule,
    CheckboxModule,
    ButtonModule,
    AvatarModule,
    TagModule,
    CardModule
  ]
})
export class TasksComponent {
  language = 'en';
  selectedStatus = '';
  selectedTaskName = '';
  selectedSort = '';
  selectedPerPage = '5';

  tasks: Task[] = [];

  constructor(private fakeService: FakeService) {
  }

  ngOnInit(): void {
    this.fakeService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });

    this.taskNameOptions = [
      { label: 'All', value: '' },
      ...this.tasks
        .map(task => ({ label: task.task, value: task.task }))
        .filter((option, index, self) =>
          index === self.findIndex(o => o.value === option.value)
        )
    ];

    this.statusOptions = [
      { label: 'All', value: '' },
      ...this.tasks
        .map(task => ({ label: task.status, value: task.status }))
        .filter((option, index, self) =>
          index === self.findIndex(o => o.value === option.value)
        )
    ];

  }
  overviewCards: OverviewCard[] = [
    { status: TaskStatus.InProgress, statusClass: 'status-in-progress', value: '300', label: 'Super Admin Role' },
    { status: TaskStatus.Draft, statusClass: 'status-draft', value: '104', label: 'Client Role' },
    { status: TaskStatus.OnReview, statusClass: 'status-on-review', value: '200', label: 'Super Admin Role' },
    { status: TaskStatus.Approved, statusClass: 'status-approved', value: '30', label: 'Super Admin Role' },
    { status: TaskStatus.Rejected, statusClass: 'status-rejected', value: '800', label: 'Super Admin Role' }
  ];

  statusOptions: StatusOptions[] = [];
  taskNameOptions!: { label: string, value: string }[];
  sortOptions = [{ label: 'Date Asc', value: 'asc' }, { label: 'Date Desc', value: 'desc' }];
  perPageOptions = [{ label: '5', value: '5' }, { label: '10', value: '10' }];



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

}