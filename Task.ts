/**
 * Represents a task with a title, description, and completion status.
 */
export class Task {
    static taskCount: number = 0; // Keeps track of the total number of tasks created.

    constructor(
        public title: string,              // The title of the task.
        public description: string,        // The description of the task.
        public completed: boolean = false   // Indicates whether the task is completed (defaults to false).
    ) {
        Task.taskCount++; // Increment the total task count upon creation of a new task.
    }

    /**
     * Marks the task as completed.
     */
    markCompleted(): void {
        this.completed = true; // Set completed status to true.
    }

    /**
     * Updates the task's description.
     * @param newDescription - The new description for the task.
     */
    updateDescription(newDescription: string): void {
        this.description = newDescription; // Update the task description.
    }

    /**
     * Returns the total number of tasks created.
     * @returns The total count of tasks.
     */
    static totalTasks(): number {
        return Task.taskCount; // Return the static task count.
    }
}

/**
 * Represents a priority task that extends the base Task class.
 */
export class PriorityTask extends Task {
    constructor(
        title: string, // The title of the priority task.
        description: string, // The description of the priority task.
        public priority: 'low' | 'medium' | 'high' // The priority level of the task.
    ) {
        super(title, description); // Call the constructor of the parent Task class.
    }

    /**
     * Marks the priority task as completed and logs a message.
     */
    override markCompleted(): void {
        this.completed = true; // Set completed status to true.
        console.log(`Priority task "${this.title}" completed.`); // Log a message indicating completion.
    }
}
