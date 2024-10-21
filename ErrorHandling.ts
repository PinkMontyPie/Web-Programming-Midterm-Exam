import { Task } from './Task';

export function parseTaskData(jsonData: string): Task[] | string {
    try {
        const parsedData = JSON.parse(jsonData);
        return parsedData.map((task: any) => new Task(task.title, task.description, task.completed));
    } catch (error) {
        return 'Error parsing task data: ' + error.message;
    }
}