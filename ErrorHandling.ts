import { Task } from './Task';

/**
 * Parses a JSON string of task data and converts it into an array of Task objects.
 * If parsing fails, it returns an error message.
 * @param jsonData - A JSON string representing task data.
 * @returns An array of Task objects or an error message.
 */
export function parseTaskData(jsonData: string): Task[] | string {
    try {
        const parsedData = JSON.parse(jsonData); // Attempt to parse the JSON string.
        
        // Map parsed data to create an array of Task objects.
        return parsedData.map((task: any) => new Task(task.title, task.description, task.completed));
    } catch (error) {
        // If there's an error, return a message with the error details.
        return 'Error parsing task data: ' + (error as Error).message;
    }
}
