class Task {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.id = crypto.randomUUID();
    }
}

const myProjects = JSON.parse(localStorage.getItem("myProjects") || []);

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
        this.id = crypto.randomUUID();
    }
}

export { Task, myProjects, Project};