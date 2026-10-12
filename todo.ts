interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];

function addTask(id: number, title: string): void {
    const task: Task = {
        id: id,
        title: title,
        completed: false
    };

    tasks.push(task);
}

function completeTask(id: number): void {
    tasks = tasks.map((task: Task): Task => {
        if (task.id === id) {
            return { ...task, completed: true };
        }
        return task;
    });
}

function displayTasks(): void {
    tasks.forEach((task: Task): void => {
        console.log(
            task.id + ". " + task.title +
            " - " + (task.completed ? "Completed" : "Pending")
        );
    });
}

addTask(1, "Learn TypeScript");
addTask(2, "Practice React");

completeTask(1);
displayTasks();