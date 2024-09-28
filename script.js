let pendingTasks = [];
let completedTasks = [];

function addTask() {
    const taskInput = document.getElementById('new-task').value;
    const timestamp = new Date().toLocaleString();
    
    if (taskInput) {
        const task = {
            name: taskInput,
            createdAt: timestamp,
            completedAt: null
        };
        pendingTasks.push(task);
        document.getElementById('new-task').value = ''; // Clear input field
        displayTasks();
    }
}

function displayTasks() {
    const pendingList = document.getElementById('pending-tasks');
    const completedList = document.getElementById('completed-tasks');

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    pendingTasks.forEach((task, index) => {
        pendingList.innerHTML += `<li>
            ${task.name} - <small>${task.createdAt}</small>
            <button onclick="completeTask(${index})">Complete</button>
            <button onclick="deleteTask(${index}, 'pending')">Delete</button>
        </li>`;
    });

    completedTasks.forEach((task, index) => {
        completedList.innerHTML += `<li>
            ${task.name} - <small>${task.completedAt}</small>
            <button onclick="deleteTask(${index}, 'completed')">Delete</button>
        </li>`;
    });
}

function completeTask(index) {
    const task = pendingTasks.splice(index, 1)[0];
    task.completedAt = new Date().toLocaleString();
    completedTasks.push(task);
    displayTasks();
}

function deleteTask(index, listType) {
    if (listType === 'pending') {
        pendingTasks.splice(index, 1);
    } else {
        completedTasks.splice(index, 1);
    }
    displayTasks();
}
