import "./style.css";
import { Task, Project, myProjects } from "./model.js";
import { displayProjects, displayProjectTitle, displayTasks } from "./view.js";


const addTaskBtns = document.querySelectorAll('.add-task-btn');
addTaskBtns.forEach(button => {
    button.addEventListener('click', () => {
        const dialog = document.querySelector('#task-input');
        dialog.showModal();
    })
})

const deleteProjectBtns = document.querySelectorAll('.delete-project-btn');
deleteProjectBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const projectCard = event.target.closest('.project-card');
        const id = projectCard.dataset.id;
        const index = myProjects.findIndex(project => project.id === id);
        myProjects.splice(index, 1);
        console.log(myProjects);
    })
})

const projectList = document.querySelector('.project-list');
projectList.addEventListener('click', (event) => {
    if (!event.target.closest('.project-card')) return;
    const projectCard = event.target.closest('.project-card');
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

const cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', (event) => {
    const clickedCard = event.target.closest('.task-card');
    const collapsibleContainer = clickedCard.querySelector('.collapsible-container');
    if (!clickedCard) return;

    collapsibleContainer.classList.toggle('is-open');
})

function createTask(event) {
    event.preventDefault();

    const taskForm = document.querySelector('#task-form');
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
displayProjects();
displayProjectTitle();
displayTasks();