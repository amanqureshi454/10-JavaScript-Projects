"use strict";

const input = document.getElementById('todoInput');
const searchInput = document.getElementById('search-button');
const addBtn = document.getElementById('addBtn');
const todoList = document.querySelector('.todo-list');
let tasks = [];


addBtn.addEventListener('click', addTasks);

function addTasks(e) {
    e.preventDefault();

    let value = input.value.trim();
    if (value !== "") {
        const list = document.createElement("li");
        list.className = "li";

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.className = "form-check-input";
        checkbox.type = "checkbox";

        // Text task
        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = value;

        // Text date
        const spanDate = document.createElement("span");
        spanDate.className = "todo-text";
        let currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
        spanDate.textContent = formattedDate;

        // Delete button
        const deleteBtn = document.createElement("span");
        deleteBtn.className = "span-button";
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.addEventListener('click', function () {
            const deleteItem = this.parentElement;
            const index = tasks.indexOf(deleteItem)
            if (index !== -1) {
                tasks.splice(index, 1);
                deleteItem.remove();
            }
        })


        // Append elements to list
        list.appendChild(checkbox);
        list.appendChild(span);
        list.appendChild(spanDate);
        list.appendChild(deleteBtn);

        // Add list item to tasks array and todo list
        tasks.push(list);
        todoList.appendChild(list);

        // Clear input field
        input.value = "";
    }
}


