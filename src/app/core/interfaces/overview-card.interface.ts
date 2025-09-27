import { TaskStatus } from "../enums/task-status.enum";

export interface OverviewCard {
  status: TaskStatus;      // Use your TaskStatus enum
  statusClass: string;
  value: string;
  label: string;
}