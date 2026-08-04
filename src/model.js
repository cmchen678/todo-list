class Task {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.id = crypto.randomUUID();
    }

    editTask(newTitle, newDescription, newDueDate, newPriority, newNotes) {
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
        this.notes = newNotes;
    }
}

const myProjects = [];

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
        this.id = crypto.randomUUID();
    }
}

export { Task, myProjects, Project};