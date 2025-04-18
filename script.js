document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Função para adicionar tarefa
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Adicionar botão de deletar
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Deletar';
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.addEventListener('click', function () {
                taskList.removeChild(li);
            });

            // Adicionar o botão de delete à tarefa
            li.appendChild(deleteBtn);

            // Adicionar a tarefa à lista
            taskList.appendChild(li);

            // Limpar o campo de entrada
            taskInput.value = '';
        }
    });

    // Função para marcar tarefa como concluída
    taskList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });
});
