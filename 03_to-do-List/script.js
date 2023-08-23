const taskInput = document.querySelector(".task-input");
const adddTaskButton = document.querySelector(".addTask");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.todo-filter')

adddTaskButton.addEventListener('click',addTask,false);
todoList.addEventListener('click', removeTodoTask,false);
filterOption.addEventListener('click', todoFilter,false)

function addTask(e){
    e.preventDefault();
    // just stopped the default behavior of the submit button.

    if (taskInput.value.trim()===''){
        showNotification("Please enter the task before adding it",2000)
    }
    
    else{
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo');
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    newTask.classList.add('todo-item');
    toDoDiv.appendChild(newTask);


    const taskCompleted = document.createElement('button');
    taskCompleted.innerHTML="<i class='bx bx-check bx-sm' ></i>";
    taskCompleted.classList.add('check-button');
    toDoDiv.appendChild(taskCompleted);


    const deleteTask = document.createElement('button');
    deleteTask.innerHTML="<i class='bx bx-trash bx-sm trashIcon' ></i>";
    deleteTask.classList.add('remove-button');
    toDoDiv.appendChild(deleteTask);


    todoList.appendChild(toDoDiv);   
    
    taskInput.value= '';
}
}


// delete task button 
function removeTodoTask(task){

        if(task.target.classList.contains("remove-button")){

        const item = task.target.parentNode;
            item.classList.add('fall')
              item.addEventListener('transitionend',() => {
                item.remove();
              });
              showNotification("Task deleted Successfully!..",2000)
        }


            if (task.target.classList.contains("check-button")) {
                const item = task.target.parentNode;
                      item.classList.toggle('completed');
                      showNotification("Task marked as Completed!..",2000)
            }
            if (task.target.classList.contains("completed")){
                const item = task.target.parentNode;
                item.classList.toggle('check-button');
                showNotification("Task removed from Completed List!..",2000)
            }
}


//* <--notification function!-->
function showNotification(message, duration) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";

    // Hide the notification after the specified duration (milliseconds)
    setTimeout(function() {
        notification.style.display = "none";
    }, duration);
}

function todoFilter(event){
const todoOptions = todoList.querySelectorAll('.todo');
todoOptions.forEach(function(todo){
    switch (event.target.value) {
        case "all":
            todo.style.display = "flex"
            break;
            
        case "completed":
            if (todo.classList.contains('completed')) {
                todo.style.display = "flex";
            }
            else todo.style.display = "none";
            break;
        case "uncompleted":
            if (!todo.classList.contains('completed')) {
                todo.style.display = "flex";
            }
            else todo.style.display = "none";
                break;
    }
})
}
