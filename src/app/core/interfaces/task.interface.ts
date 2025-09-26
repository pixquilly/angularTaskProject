import { TaskStatus } from "../enums/task-status.enum";

export interface Task {
  client: string;
  task: string;
  status: TaskStatus;
  receivedOn: string;
}