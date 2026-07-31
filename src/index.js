import "./style.css";
import { Task, Project, myProjects } from "./model.js";
import { displayProjects, displayProjectTitle, displayTasks, displayTask } from "./view.js";


const addTaskBtns = document.querySelectorAll('.add-task-btn');
addTaskBtns.forEach(button => {
    button.addEventListener('click', () => {
        const dialog = document.querySelector('#task-input');
        dialog.showModal();
    })
})

const deleteTaskBtns = document.querySelectorAll('delete-task-btn');
deleteTaskBtns.forEach(button => {
    button.addEventListener('click', event => {
        const taskCard = event.target.closest('.task-card');
        const id = taskCard.dataset.id;
        const index = activeProject.tasks.findIndex(task => task.id === id);
        activeProject.deleteTask(index);
        console.log(activeProject);
    })
})

const projectList = document.querySelector('.project-list');
projectList.addEventListener('click', (event) => {
    const projectCard = event.target.closest('.project-card');
    if (!projectCard) return;

    const id = projectCard.dataset.id;
    const index = myProjects.findIndex(project => project.id === id);

    if (event.target.classList.contains('delete-project-btn')) {
        myProjects.splice(index, 1);
        displayProjects();
        if (activeProject.id === id) {
            activeProject = myProjects[0];
            displayProjectTitle();
            displayTasks();
        }
    } else {
        activeProject = myProjects[index];
        displayProjectTitle();
        displayTasks();
    }
})

const taskForm = document.querySelector('#task-form');
taskForm.addEventListener('submit', createTask);

const projectForm = document.querySelector('#project-form');
projectForm.addEventListener('submit', createProject);

const editTaskForm = document.querySelector('#edit-task-form');
editTaskForm.addEventListener('submit', editTask);

const cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', (event) => {
    const clickedCard = event.target.closest('.task-card');
    if (!clickedCard) return;

    const id = clickedCard.dataset.id;
    const index = activeProject.tasks.findIndex(task => task.id === id);

    if (event.target.classList.contains('delete-task-btn')) {
        activeProject.deleteTask(index);
        displayProjects();
        displayTasks();
    } else if (event.target.classList.contains('edit-task-btn')) {
        const dialog = document.querySelector('#edit-task-input');
        dialog.showModal();
        activeTask = activeProject.tasks[index];
        editTaskForm.elements["task_title"].value = activeTask.title;
        editTaskForm.elements["task_desc"].value = activeTask.description;
        editTaskForm.elements["due_date"].value = activeTask.dueDate;
        editTaskForm.elements["task_prio"].value = activeTask.priority;
    } else {
        const collapsibleContainer = clickedCard.querySelector('.collapsible-container');
        collapsibleContainer.classList.toggle('is-open');
    }
})

function createTask(event) {
    event.preventDefault();

    const dialog = document.querySelector('#task-input');

    const formData = new FormData(taskForm);
    const title = formData.get('task_title');
    const description = formData.get('task_desc');
    const dueDate = formData.get('due_date');
    const priority = formData.get('task_prio');

    const task = new Task(title, description, dueDate, priority);
    activeProject.addTaskToProject(task);
    displayProjects();
    displayTasks();
    taskForm.reset();
    dialog.close();
}

function editTask(event) {
    event.preventDefault();

    const dialog = document.querySelector('#edit-task-input');

    const formData = new FormData(editTaskForm);
    const title = formData.get('task_title');
    const description = formData.get('task_desc');
    const dueDate = formData.get('due_date');
    const priority = formData.get('task_prio');
    activeTask.editTask(title, description, dueDate, priority);
    displayProjects();
    displayTask();
    dialog.close();
}

function createProject(event) {
    event.preventDefault();
    const dialog = document.querySelector('#project-input');
    const projectForm = document.querySelector('#project-form');

    const formData = new FormData(projectForm);
    const title = formData.get('project_title');

    const project = new Project(title);
    myProjects.push(project);
    const lastIndex = myProjects.length - 1;
    activeProject = myProjects[lastIndex];
    displayProjects();
    displayProjectTitle();
    displayTasks();
    projectForm.reset();
    dialog.close();
}

const generalTasks = new Project('General');
myProjects.push(generalTasks);
export let activeProject = myProjects[0];
export let activeTask;
displayProjects();
displayProjectTitle();
displayTasks();