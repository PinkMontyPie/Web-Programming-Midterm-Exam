import { Task, PriorityTask } from './Task';

/**
 * Creates a task updater function that applies a given update function to a task.
 * @param updateFn - A function that takes a Task and applies an update.
 * @returns A new function that accepts a Task and applies the update function.
 */
export function createTaskUpdater(updateFn: (task: Task) => void): (task: Task) => void {
    return (task: Task) => updateFn(task); // Return a new function that calls the update function with the task.
}

/**
 * Marks a task as urgent by setting its priority to high.
 * If the task is not a PriorityTask, logs a message indicating that priority is not supported.
 * @param task - The Task to be marked as urgent.
 */
export function markAsUrgent(task: Task): void {
    if (task instanceof PriorityTask) {
        task.priority = 'high'; // Set the priority to high if it's a PriorityTask.
    } else {
        console.log('This task does not support priority.'); // Log a message for non-PriorityTask.
    }
}
