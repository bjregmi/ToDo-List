//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck); 


//functions
function addTodo(event){
	//to prevent form from submitting
	event.preventDefault();
	//todo div
	todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	//li
	const newTodo = document.createElement("li")
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);
	//checked item button
	const completeButton = document.createElement("button");
	completeButton.innerHTML = '<i class="fas fa-check"></i>';
	completeButton.classList.add("complete-btn");
	todoDiv.appendChild(completeButton);
	//trash button
	const trashButton = document.createElement("button");
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);
	//append
	todoList.appendChild(todoDiv);
	//clear input
	todoInput.value = "";
}

function deleteCheck(e){
	const item = e.target;
	//delete todo
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		todo.remove();
	}
	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}