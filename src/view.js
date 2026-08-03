import { myProjects } from "./model.js";
import { activeProject, activeTask } from "./index.js";

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

        const taskList = document.createElement('div');
        taskList.classList.add('task-list');

        for (const task of project.tasks) {
            const taskItem = document.createElement('div');
            taskItem.classList.add('project-task');

            const title = document.createElement('h4');

            title.textContent = task.title;

            taskList.append(title);
        }

        projectCard.append(title, addTaskBtn, taskList);

        if (project !== myProjects[0]) {
            const deleteProjectBtn = document.createElement('button');
            deleteProjectBtn.classList.add('delete-project-btn');
            deleteProjectBtn.textContent = 'Delete Project';
            addTaskBtn.after(deleteProjectBtn);
        }

        projectList.append(projectCard);
    }

    const id = activeProject.id;
    const activeCard = document.querySelector(`[data-id="${id}"]`);
    activeCard.classList.add('active');
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
        taskCard.dataset.id = task.id;

        const taskHeader = document.createElement('div');
        taskHeader.classList.add('task-header');

        const title = document.createElement('h3');
        title.classList.add('task-title');
        title.textContent = task.title;

        const taskBtnContainer = document.createElement('div');
        taskBtnContainer.classList.add('task-btn-container');

        const editTaskBtn = document.createElement('button');
        editTaskBtn.classList.add('edit-task-btn');
        editTaskBtn.textContent = 'Edit';

        const deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.classList.add('delete-task-btn');
        deleteTaskBtn.textContent = 'Delete';

        taskBtnContainer.append(editTaskBtn, deleteTaskBtn);

        const description = document.createElement('p');
        description.classList.add('task-description');
        description.textContent = task.description;

        taskHeader.append(title, taskBtnContainer, description);

        const dueDate = document.createElement('p');
        dueDate.classList.add('task-due-date');
        dueDate.textContent = `Due: ${task.dueDate}`;

        const collapseContainer = document.createElement('div');
        collapseContainer.classList.add('collapsible-container');

        const collapsibleContent = document.createElement('div');
        collapsibleContent.classList.add('collapsible-content');

        const priority = document.createElement('p');
        priority.classList.add('task-priority')
        priority.textContent = `Priority: ${task.priority}`

        const notes = document.createElement('p');
        notes.classList.add('task-notes');
        notes.textContent = task.notes;

        collapsibleContent.append(priority, notes);

        collapseContainer.append(collapsibleContent);

        taskCard.append(taskHeader, dueDate, collapseContainer);
        container.append(taskCard);
    }
}

export function displayTask() {
    const id = activeTask.id;
    const taskCard = document.querySelector(`[data-id="${id}"]`);
    taskCard.querySelector('.task-title').textContent = activeTask.title;
    taskCard.querySelector('.task-due-date').textContent = `Due: ${activeTask.dueDate}`;
    taskCard.querySelector('.task-description').textContent = activeTask.description;
    taskCard.querySelector('.task-priority').textContent = `Priority: ${activeTask.priority}`;
    taskCard.querySelector('.task-notes').textContent = activeTask.notes;
}