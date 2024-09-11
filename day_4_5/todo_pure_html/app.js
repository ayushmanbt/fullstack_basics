let form = document.getElementById("todo_form");

let todo_text = document.getElementById("todo_text");
let total_todos = 0

let todos = []

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let text = todo_text.value;
    let new_todo = {
        id: total_todos,
        text: text,
        isDone: false
    }
    todos.push(new_todo);
    update();
    total_todos += 1;
    todo_text.value = "";
})

const todo_list_container = document.getElementById("todo_list")

function update() {
    todo_list_container.innerHTML = ""
    todos.forEach(todo => {
        todo_list_container.innerHTML += 
        `
        <div class="todo_list_item">
            <input type="checkbox" id="todo_checkbox_${todo.id}">
            <span>${todo.text}</span>
            <button id="todo_delete_${todo.id}">Delete Todo</button>
        </div> 
        `
    })

    todos.forEach(todo => {
        document.getElementById(`todo_delete_${todo.id}`).addEventListener("click", () => {

            todos = todos.filter((e) => e.id !== todo.id);
            update();
            // .map()
            // .reduce()
            // .filter()
            // .sorted()
        })
    })
}

//() => {function body }

/*
let update = () => {
    //body
}
*/