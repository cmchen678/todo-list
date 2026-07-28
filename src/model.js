class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    }
}

const myProjects = [];

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
        this.id = crypto.randomUUID();
    }

    addTaskToProject(task) {
        this.tasks.push(task);
    }
}

export { Task, myProjects, Project};