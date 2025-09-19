const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.task-form')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')
// Load tasks from /api/tasks
const showTasks = async () => {
  loadingDOM.style.visibility = 'visible'
  try {
    const {
      data: { tasks },
    } = await axios.get('/api/v1/tasks')
    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">🎯 No tasks yet! Add your first task above.</h5>'
      loadingDOM.style.visibility = 'hidden'
      return
    }
    const allTasks = tasks
      .map((task) => {
        const { completed, _id: taskID, name } = task
        return `<div class="single-task ${completed && 'task-completed'}" style="animation: slideInUp 0.3s ease-out;">
<h5><span><i class="far fa-check-circle"></i></span>${completed ? '✅' : '📋'} ${name}</h5>
<div class="task-links">
<!-- edit link -->
<a href="task.html?id=${taskID}"  class="edit-link" title="Edit task">
<i class="fas fa-edit"></i> Edit
</a>
<!-- delete btn -->
<button type="button" class="delete-btn" data-id="${taskID}" title="Delete task">
<i class="fas fa-trash"></i> Delete
</button>
</div>
</div>`
      })
      .join('')
    tasksDOM.innerHTML = allTasks
  } catch (error) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">❌ There was an error loading tasks. Please try again later.</h5>'
  }
  loadingDOM.style.visibility = 'hidden'
}

showTasks()

// delete task /api/tasks/:id

tasksDOM.addEventListener('click', async (e) => {
  const el = e.target
  if (el.parentElement.classList.contains('delete-btn')) {
    const deleteBtn = el.parentElement
    const taskElement = deleteBtn.closest('.single-task')
    const id = deleteBtn.dataset.id
    
    // Immediate visual feedback
    taskElement.style.opacity = '0.5'
    taskElement.style.pointerEvents = 'none'
    deleteBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Deleting...'
    deleteBtn.disabled = true
    
    try {
      await axios.delete(`/api/v1/tasks/${id}`)
      
      // Smooth removal animation
      taskElement.style.transform = 'translateX(-100%)'
      taskElement.style.transition = 'all 0.3s ease-out'
      
      setTimeout(() => {
        taskElement.remove()
        // Check if no tasks left
        if (tasksDOM.children.length === 0) {
          tasksDOM.innerHTML = '<h5 class="empty-list">🎯 No tasks yet! Add your first task above.</h5>'
        }
      }, 300)
      
    } catch (error) {
      console.log(error)
      // Restore element on error
      taskElement.style.opacity = '1'
      taskElement.style.pointerEvents = 'auto'
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i> Delete'
      deleteBtn.disabled = false
      
      // Show error message
      const errorMsg = document.createElement('div')
      errorMsg.className = 'alert alert-danger'
      errorMsg.textContent = '❌ Failed to delete task. Please try again.'
      taskElement.appendChild(errorMsg)
      setTimeout(() => errorMsg.remove(), 3000)
    }
  }
})

// form

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = taskInputDOM.value.trim()

  if (!name) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `⚠️ Please enter a task name`
    formAlertDOM.classList.add('text-danger')
    setTimeout(() => {
      formAlertDOM.style.display = 'none'
      formAlertDOM.classList.remove('text-danger')
    }, 3000)
    return
  }

  // Loading state
  const submitBtn = formDOM.querySelector('.submit-btn')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...'
  submitBtn.disabled = true

  try {
    await axios.post('/api/v1/tasks', { name })
    showTasks()
    taskInputDOM.value = ''
    formAlertDOM.style.display = 'block'
    formAlertDOM.textContent = `✅ Task "${name}" added successfully!`
    formAlertDOM.classList.add('text-success')
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `❌ Error adding task. Please try again.`
    formAlertDOM.classList.add('text-danger')
  }
  
  // Reset button
  submitBtn.innerHTML = originalText
  submitBtn.disabled = false
  
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success', 'text-danger')
  }, 3000)
})