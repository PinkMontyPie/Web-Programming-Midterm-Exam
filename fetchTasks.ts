import { Task } from './Task';

export async function fetchTasks(): Promise<Task[]> {
    try {
        const tasks: Task[] = [
            new Task("Task 1", "Description 1"),
            new Task("Task 2", "Description 2"),
        ];
        return new Promise((resolve) => setTimeout(() => resolve(tasks), 1000));
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
    }
}
