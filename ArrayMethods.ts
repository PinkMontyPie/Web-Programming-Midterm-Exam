import { Task } from './Task';

/**
 * Gets the titles of all tasks.
 * @param tasks - An array of Task objects.
 * @returns An array of task titles.
 */
export function getTaskTitles(tasks: Task[]): string[] {
    return tasks.map(task => task.title); // Extracts titles from tasks.
}

/**
 * Retrieves tasks that are not completed.
 * @param tasks - An array of Task objects.
 * @returns An array of incomplete Task objects.
 */
export function getIncompleteTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => !task.completed); // Filters out completed tasks.
}

/**
 * Counts how many tasks are completed.
 * @param tasks - An array of Task objects.
 * @returns The number of completed tasks.
 */
export function getCompletedTaskCount(tasks: Task[]): number {
    return tasks.reduce((count, task) => task.completed ? count + 1 : count, 0); 
    // Sums up completed tasks.
}
