import { TaskStatus } from "../enums/task-status.enum"

 export interface StatusOptions{
    label: TaskStatus | 'All',
    value: string
 }