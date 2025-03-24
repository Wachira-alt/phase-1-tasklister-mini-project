document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        const taskInput = document.getElementById("new-task-description");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            // Add delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = " X";
            deleteButton.style.marginLeft = "10px";
            deleteButton.style.color = "red";
            deleteButton.style.cursor = "pointer";

            deleteButton.addEventListener("click", () => {
                taskItem.remove();
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            taskInput.value = ""; // Clear input field
        }
    });
});
