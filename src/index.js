document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", function(e) {
    e.preventDefault()
    newTodo(event.target.new_task_description.value)
    form.reset()
  })
});

function newTodo(todoText) {
  const li = document.createElement("li")
  const checkbox = document.createElement("span")
  li.textContent = todoText
  checkbox.textContent = " 🔲"
  checkbox.className = "checkbox"
  checkbox.addEventListener("click", deleteTodo)
  li.appendChild(checkbox)
  document.querySelector("#tasks").appendChild(li)
}

function deleteTodo(e) {
  console.log(e.target.parentNode.remove())
}
