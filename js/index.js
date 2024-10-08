// Array para almacenar usuarios
const users = [];

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

function showCreateAccountModal() {
  document.getElementById('create-account-modal').style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function submitCreateAccount() {
  const username = document.getElementById('new-username').value;
  const email = document.getElementById('new-email').value;
  const password = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password === confirmPassword) {
    // Crear un nuevo usuario
    const newUser = {
      username: username,
      email: email,
      password: password
    };
    
    // Agregar el nuevo usuario a la matriz de usuarios
    users.push(newUser);

    alert('Cuenta creada exitosamente.');
    closeModal('create-account-modal');

    // Aquí puedes agregar la lógica para enviar los datos al servidor si es necesario
  } else {
    alert('Las contraseñas no coinciden.');
  }
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
      <img src="${assignedTo}" alt="Asignado">
    </div>
    <div class="task-date">${new Date(dueDate).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' })}</div>
    <div class="task-status ${status.replace('_', '-')}"">${status.replace('_', ' ')}</div>
  `;
  taskList.appendChild(newTask);
}
