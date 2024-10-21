import { Task, PriorityTask } from './Task';

export function createTaskUpdater(updateFn: (task: Task) => void): (task: Task) => void {
    return (task: Task) => updateFn(task);
}

export function markAsUrgent(task: Task): void {
    if (task instanceof PriorityTask) {
        task.priority = 'high';
    } else {
        console.log('This task does not support priority.');
    }
}
