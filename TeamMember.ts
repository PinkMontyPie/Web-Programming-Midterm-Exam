import { Task } from './Task';

/**
 * Represents a team member with a name, role, and assigned tasks.
 */
export interface TeamMember {
    name: string; // The name of the team member.
    role: string; // The role of the team member (e.g., Developer, Manager).
    tasks: Task[]; // An array of tasks assigned to the team member.
}

/**
 * Assigns a task to a team member by adding it to their task list.
 * @param member - The TeamMember to whom the task is assigned.
 * @param task - The Task to be assigned to the team member.
 */
export function assignTask(member: TeamMember, task: Task): void {
    member.tasks.push(task); // Add the task to the member's task list.
}
