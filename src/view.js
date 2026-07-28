import { myProjects } from "./model.js";
import { activeProject } from "./index.js";

export function displayProjects() {
    const projectList = document.querySelector('.project-list');
    projectList.innerHTML = '';

    for (const project of myProjects) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.dataset.id = project.id;

        const title = document.createElement('h2');
        title.textContent = project.title;

        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.setAttribute('command', 'show-modal');
        addTaskBtn.setAttribute('commandfor', 'task-input');
        addTaskBtn.textContent = 'Add Task';

        projectCard.append(title, addTaskBtn);

        const taskList = document.createElement('div');
        taskList.classList.add('task-list');

        for (const task of project.tasks) {
            const taskItem = document.createElement('div');
            taskItem.classList.add('project-task');

            const title = document.createElement('h4');
            title.textContent = task.title;

            taskList.append(title);
        }

        projectCard.append(taskList);

        projectList.append(projectCard);
    }
}

export function displayProjectTitle() {
    const projectTitle = document.querySelector('.project-title');
    projectTitle.textContent = activeProject.title;
}

export function displayTasks() {
    const container = document.querySelector('.card-container');
    container.innerHTML = '';

    for (const task of activeProject.tasks) {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card')

        const title = document.createElement('h4');
        title.textContent = task.title;

        const dueDate = document.createElement('p');
        dueDate.textContent = `Due: ${task.dueDate}`;

        const collapseContainer = document.createElement('div');
        collapseContainer.classList.add('collapsible-container');

        const collapsibleContent = document.createElement('div');
        collapsibleContent.classList.add('collapsible-content');

        const description = document.createElement('p');
        description.textContent = task.description;

        const priority = document.createElement('p');
        priority.textContent = `Priority Level: ${task.priority}`

        collapsibleContent.append(description, priority);

        collapseContainer.append(collapsibleContent);

        taskCard.append(title, dueDate, collapseContainer);
        container.append(taskCard);
    }
}