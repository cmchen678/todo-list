import { Task } from "./task.js";
const taskForm = document.querySelector('#task-form');
const myTasks = [];
const dialog = document.querySelector('#task-input');

export function createTask(event) {
    event.preventDefault();

    const formData = new FormData(taskForm);
    const title = formData.get('task_title');
    const description = formData.get('task_desc');
    const dueDate = formData.get('due_date');
    const priority = formData.get('task_prio');

    const task = new Task(title, description, dueDate, priority);
    myTasks.push(task);
    console.log(myTasks);
    dialog.close();
}