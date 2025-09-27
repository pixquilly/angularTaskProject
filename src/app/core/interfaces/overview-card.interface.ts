import { TaskStatus } from "../enums/task-status.enum";
import { TaskNameOptions } from "./task-options.interface";

export interface OverviewCard extends TaskNameOptions{
  status: TaskStatus;
  statusClass: string;
}