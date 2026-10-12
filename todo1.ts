import { useState } from "react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
}

function TaskItem({ task, onToggle }: TaskItemProps) {
    return (
        <li>
            <span>
                {task.title} -{" "}
                {task.completed ? "Completed" : "Pending"}
            </span>

            <button onClick={() => onToggle(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>
        </li>
    );
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Learn TypeScript", completed: false },
        { id: 2, title: "Practice React", completed: false }
    ]);

    const [title, setTitle] = useState<string>("");

    function addTask(): void {
        if (title.trim() === "") return;

        const newTask: Task = {
            id: Date.now(),
            title: title,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTitle("");
    }

    function toggleTask(id: number): void {
        setTasks(
            tasks.map((task: Task): Task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }

    return (
        <div>
            <h1>My To-Do List</h1>

            <input
                type="text"
                value={title}
                placeholder="Enter a task"
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task: Task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;