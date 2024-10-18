function attToDo() {
    const taskList = JSON.parse('tasks.JSON');
    const toDoContainer = document.getElementById('todo');
    
    toDoContainer.innerHTML = '';

    taskList.forEach(item => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
        <input type="checkbox" ${item.completed ? 'checked' : ''}>
        <h3 class="task-title">${item.title}</h3>
        <span class="date">${item.dueDate}</span>
        `;
        toDoContainer.appendChild(taskElement);
    });
}

document.addEventListener('DOMContentLoaded', attToDo());