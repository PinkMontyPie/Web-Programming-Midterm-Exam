import { Task, PriorityTask } from './Task';
import { calculateTotalCompletedTasks } from './taskUtils';
import { fetchTasks } from './fetchTasks';
import { assignTask, TeamMember } from './TeamMember';
import { getTaskTitles, getIncompleteTasks, getCompletedTaskCount } from './ArrayMethods';

async function main() {
    const tasks: Task[] = [
        new Task('Task 1', 'Description 1', true),
        new Task('Task 2', 'Description 2'),
        new PriorityTask('Task 3', 'Description 3', 'medium'),
    ];

    const member: TeamMember = { name: 'Alice', role: 'Developer', tasks: [] };

    // Assign task to member
    assignTask(member, tasks[1]);

    // Fetch tasks
    const fetchedTasks = await fetchTasks();

    // Log titles
    console.log('Task Titles:', getTaskTitles(tasks));
    
    // Log incomplete tasks
    console.log('Incomplete Tasks:', getIncompleteTasks(tasks));

    // Log completed task count
    console.log('Completed Task Count:', getCompletedTaskCount(tasks));

    // Calculate total completed tasks
    const totalCompleted = calculateTotalCompletedTasks(tasks);
    console.log(`Total completed tasks: ${totalCompleted}`);
}

main();
