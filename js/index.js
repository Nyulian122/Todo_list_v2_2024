function showPanel(panelId) {
  // Ocultar todos los paneles
  document.getElementById('login-panel').classList.remove('active');
  document.getElementById('main-panel').classList.remove('active');
  document.getElementById('task-form-panel').classList.remove('active');

  // Mostrar solo el panel seleccionado
  document.getElementById(panelId).classList.add('active');
}

function login() {
  showPanel('main-panel');
}

function skipLogin() {
  showPanel('main-panel');
}

function createAccount() {
  alert('Función de crear cuenta aún no implementada.');
}

function showTaskForm() {
  showPanel('task-form-panel');
}

function backToMain() {
  showPanel('main-panel');
}

function createTask() {
  const taskName = document.getElementById('task-name').value;
  const assignedTo = document.getElementById('assigned-to').value;
  const dueDate = document.getElementById('due-date').value;
  const status = document.getElementById('status').value;

  showPanel('main-panel');

  const taskList = document.getElementById('tasks');
  const newTask = document.createElement('div');
  newTask.classList.add('task-item');
  newTask.innerHTML = `
    <div class="task-name">
      <input type="checkbox">
      <span>${taskName}</span>
    </div>
    <div class="task-assigned">
      <img src="user.jpg" alt="Asignado">
    </div>
    <div class="task-date">${new Date(dueDate).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' })}</div>
    <div class="task-status ${status.replace('_', '-')}"">${status.replace('_', ' ')}</div>
  `;
  taskList.appendChild(newTask);
}
