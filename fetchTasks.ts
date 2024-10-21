import { Task } from './Task';

/**
 * Simulates fetching tasks from an external API and returns a promise that resolves to an array of Task objects.
 * @returns A promise that resolves to an array of Task objects.
 */
export async function fetchTasks(): Promise<Task[]> {
    try {
        // Create an array of Task objects to simulate fetched data.
        const tasks: Task[] = [
            new Task("Task 1", "Description 1"),
            new Task("Task 2", "Description 2"),
        ];
        
        // Simulate a delay of 1 second before resolving the promise with the tasks.
        return new Promise((resolve) => setTimeout(() => resolve(tasks), 1000));
    } catch (error) {
        // Log the error and return an empty array in case of failure.
        console.error('Error fetching tasks:', error);
        return [];
    }
}
