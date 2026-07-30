class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    }

    editTask(newTitle, newDescription, newDueDate, newPriority) {
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
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

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}

export { Task, myProjects, Project};