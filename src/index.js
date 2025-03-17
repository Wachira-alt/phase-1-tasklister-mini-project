document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const taskInput = document.getElementById("new-task-description");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.style.marginLeft = "10px";
            deleteButton.addEventListener("click", () => taskItem.remove());

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });
});

});
