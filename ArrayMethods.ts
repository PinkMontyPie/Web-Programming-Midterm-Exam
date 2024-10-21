import { Task } from './task';

export function getTaskTitles(tasks: Task[]): string[] {
    return tasks.map(task => task.title);
}

export function getIncompleteTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => !task.completed);
}

export function getCompletedTaskCount(tasks: Task[]): number {
    return tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
}
