const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const toggleModalButton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const addButton = document.querySelector("#add-new-task");
let dragElement = null;

loadTasks();

function saveTasks() {
    const data = {
        todo: [],
        progress: [],
        done: [],
    };

    todo.querySelectorAll(".task").forEach((task) => {
        data.todo.push({
            title: task.querySelector("h2").textContent,
            description: task.querySelector("p").textContent,
        });
    });

    progress.querySelectorAll(".task").forEach((task) => {
        data.progress.push({
            title: task.querySelector("h2").textContent,
            description: task.querySelector("p").textContent,
        });
    });

    done.querySelectorAll(".task").forEach((task) => {
        data.done.push({
            title: task.querySelector("h2").textContent,
            description: task.querySelector("p").textContent,
        });
    });

    localStorage.setItem("kanbanTasks", JSON.stringify(data));
}

function loadTasks() {
    const data = JSON.parse(localStorage.getItem("kanbanTasks"));

    if (!data) return;

    data.todo.forEach((item) => {
        const task = document.createElement("div");
        task.classList.add("task");
        task.draggable = true;

        const heading = document.createElement("h2");
        heading.textContent = item.title;

        const para = document.createElement("p");
        para.textContent = item.description;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            task.remove();
            countUpdate();
            saveTasks();
        });

        task.appendChild(heading);
        task.appendChild(para);
        task.appendChild(deleteBtn);

        todo.appendChild(task);
        addDragEvents(task);
    });

    data.progress.forEach((item) => {
        const task = document.createElement("div");
        task.classList.add("task");
        task.draggable = true;

        const heading = document.createElement("h2");
        heading.textContent = item.title;

        const para = document.createElement("p");
        para.textContent = item.description;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            task.remove();
            countUpdate();
            saveTasks();
        });

        task.appendChild(heading);
        task.appendChild(para);
        task.appendChild(deleteBtn);

        progress.appendChild(task);
        addDragEvents(task);
    });

    data.done.forEach((item) => {
        const task = document.createElement("div");
        task.classList.add("task");
        task.draggable = true;

        const heading = document.createElement("h2");
        heading.textContent = item.title;

        const para = document.createElement("p");
        para.textContent = item.description;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            task.remove();
            countUpdate();
            saveTasks();
        });

        task.appendChild(heading);
        task.appendChild(para);
        task.appendChild(deleteBtn);

        done.appendChild(task);
        addDragEvents(task);
    });

    countUpdate();
}

function addDragEvents(task) {
    task.addEventListener("dragstart", function () {
        dragElement = task;
    });
}

const tasks = document.querySelectorAll(".task");

tasks.forEach(addDragEvents);

function countUpdate() {
    [todo, progress, done].forEach((column) => {
        const count = column.querySelector(".right");
        const task = column.querySelectorAll(".task");
        count.textContent = task.length;
    });
}

countUpdate();

function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        column.appendChild(dragElement);
        dragElement = null;
        column.classList.remove("hover-over");
        saveTasks();
        countUpdate();
    });
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

toggleModalButton.addEventListener("click", function () {
    modal.classList.toggle("active");
});

addButton.addEventListener("click", function () {
    modal.classList.remove("active");
    const taskTitle = document.querySelector("#task-title-input").value;
    const taskDesc = document.querySelector("#task-description-input").value;
    if (!taskTitle.trim()) return;

    const task = document.createElement("div");
    task.classList.add("task");
    task.draggable = true;

    const heading = document.createElement("h2");
    heading.textContent = taskTitle;

    const para = document.createElement("p");
    para.textContent = taskDesc;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", (e) => {
        task.remove();
        saveTasks();
        countUpdate();
    });

    task.appendChild(heading);
    task.appendChild(para);
    task.appendChild(deleteBtn);

    todo.appendChild(task);
    addDragEvents(task);
    document.querySelector("#task-title-input").value = "";
    document.querySelector("#task-description-input").value = "";
    saveTasks();
    countUpdate();
});
