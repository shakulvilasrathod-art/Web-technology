interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High";
}

class TodoList {
  private tasks: Task[] = [];
  private nextId: number = 1;

  // Add a new task
  addTask(
    title: string,
    description: string,
    priority: Task["priority"] = "Medium"
  ): void {
    if (title.trim() === "") {
      console.log("Task title cannot be empty.");
      return;
    }

    const newTask: Task = {
      id: this.nextId,
      title: title.trim(),
      description: description.trim(),
      completed: false,
      priority: priority
    };

    this.tasks.push(newTask);
    this.nextId++;

    console.log(`Task "${newTask.title}" was added.`);
  }

  // Mark a task as completed
  completeTask(id: number): void {
    const task: Task | undefined = this.tasks.find(
      (task: Task) => task.id === id
    );

    if (task === undefined) {
      console.log(`Task with ID ${id} was not found.`);
      return;
    }

    task.completed = true;
    console.log(`Task "${task.title}" was completed.`);
  }

  // Delete a task
  deleteTask(id: number): void {
    const taskIndex: number = this.tasks.findIndex(
      (task: Task) => task.id === id
    );

    if (taskIndex === -1) {
      console.log(`Task with ID ${id} was not found.`);
      return;
    }

    const deletedTask: Task = this.tasks[taskIndex];
    this.tasks.splice(taskIndex, 1);

    console.log(`Task "${deletedTask.title}" was deleted.`);
  }

  // Display all tasks
  showAllTasks(): void {
    if (this.tasks.length === 0) {
      console.log("Your task list is empty.");
      return;
    }

    console.log("\n--- All Tasks ---");

    this.tasks.forEach((task: Task) => {
      const status: string = task.completed ? "Completed" : "Pending";

      console.log(
        `ID: ${task.id} | ${task.title} | Priority: ${task.priority} | Status: ${status}`
      );
      console.log(`Description: ${task.description}`);
    });
  }

  // Display only pending tasks
  showPendingTasks(): void {
    const pendingTasks: Task[] = this.tasks.filter(
      (task: Task) => !task.completed
    );

    if (pendingTasks.length === 0) {
      console.log("There are no pending tasks.");
      return;
    }

    console.log("\n--- Pending Tasks ---");

    pendingTasks.forEach((task: Task) => {
      console.log(
        `ID: ${task.id} | ${task.title} | Priority: ${task.priority}`
      );
    });
  }
}

// Create a To-Do list and try its features
const myTodoList: TodoList = new TodoList();

myTodoList.addTask(
  "Complete TypeScript assignment",
  "Write and test the To-Do list program",
  "High"
);

myTodoList.addTask(
  "Review data structures",
  "Study stacks and queues",
  "Medium"
);

myTodoList.addTask(
  "Organize notes",
  "Arrange lecture notes for this week",
  "Low"
);

myTodoList.showAllTasks();

myTodoList.completeTask(1);
myTodoList.showPendingTasks();

myTodoList.deleteTask(2);
myTodoList.showAllTasks();
