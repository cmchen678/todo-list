import { createTask } from "./taskForm.js";

const taskForm = document.querySelector('#task-form');
taskForm.addEventListener('submit', createTask);