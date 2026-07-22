export default function createTask(event) {
    event.preventDefault();

    const formData = new FormData(taskForm);
    const title = formData.get('task_title');
    const description = formData.get('task_desc');
    const dueDate = formData.get('due_date');
    const priority = formData.get('form_prio');

    const task = new Task(title, description, dueDate, priority);
}