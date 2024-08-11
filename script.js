document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    const completedButton = document.createElement('button');
    completedButton.textContent = 'completed';
    completedButton.classList.add('completed');
    completedButton.addEventListener('click', function() {
        li.className = "completed";
    });

    li.appendChild(deleteButton);
    li.appendChild(completedButton);
    document.getElementById('task-list').appendChild(li);
    document.getElementById('new-task').value = '';
});
