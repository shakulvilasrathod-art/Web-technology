"use strict";
let tasks = [];
function addTask(id, title) {
    const task = {
        id: id,
        title: title,
        completed: false
    };
    tasks.push(task);
}
function completeTask(id) {
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, completed: true };
        }
        return task;
    });
}
function displayTasks() {
    tasks.forEach((task) => {
        console.log(task.id + ". " + task.title +
            " - " + (task.completed ? "Completed" : "Pending"));
    });
}
addTask(1, "Learn TypeScript");
addTask(2, "Practice React");
completeTask(1);
displayTasks();
