export class Task {
    static taskCount: number = 0;

    constructor(
        public title: string,
        public description: string,
        public completed: boolean = false
    ) {
        Task.taskCount++;
    }

    markCompleted(): void {
        this.completed = true;
    }

    updateDescription(newDescription: string): void {
        this.description = newDescription;
    }

    static totalTasks(): number {
        return Task.taskCount;
    }
}

export class PriorityTask extends Task {
    constructor(
        title: string,
        description: string,
        public priority: 'low' | 'medium' | 'high'
    ) {
        super(title, description);
    }

    override markCompleted(): void {
        this.completed = true;
        console.log(`Priority task "${this.title}" completed.`);
    }
}
