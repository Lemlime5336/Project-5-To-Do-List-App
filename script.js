const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const incompleteCounter = document.getElementById("incomplete-counter")

function updateCounters(){
    //select all elements with the completed class, counted by .length
    const completedTasks = document.querySelectorAll(".completed").length;
    //select all list elements which do not have the completed class and count using .length
    const incompleteTasks = document.querySelectorAll("li:not(.completed)").length;

    //textContent updated the counters in the html file
    completedCounter.textContent = completedTasks;
    incompleteCounter.textContent = incompleteTasks;
}

function addTask(){
    const task = inputBox.value.trim();
    if(!task){
        //alert for if user forgets to enter a task
        alert("Please write down a task");
        return;
    }

    //the ul container has alreafy been created in the HTML file ot hold the list,
    //here we make the list
    //within the inner HTML of each task item, a checkbox item has been included
        //the task content using a placeholder and edit and delete buttons at the end of each task
    const li = document.createElement("li")
    li.innerHTML=`
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;
    //to add the list items to the list container
    listContainer.appendChild(li);

    //to ensure the input field clears each time a new task is added
    inputBox.value = "";

    //adding event listeners for each of the tasks that can be done
    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    //strike out completed tasks
    checkbox.addEventListener("click", function (){
        //classList.toggle adds the completed class to the list item li
        //when the checkbox is checked, else removes the completed class
        li.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    //Edit button
    //added event listener
    editBtn.addEventListener("click", function(){
        //prompt function displays dialog box asking for new task input,
        //default value set to current content of taskSpan
        const update = prompt("Edit task: ", taskSpan.textContent);
        //check if user input new task
        if (update !== null){
            //if yes, updates textContent of taskSpan
            taskSpan.textContent = update;
            //if a completed task is edited will uncheck the task
            li.classList.remove("completed");
            //set checked to flase and update the counter
            checkbox.checked = false;
            updateCounters();
        }
    });

    deleteBtn.addEventListener("click", function (){
        //alert message for error handling
        if (confirm("Are you sure you want to delete this task?")){
            //if yes, deletes task using remove() method
            li.remove();
            //updates counter once removed
            updateCounters();
        }
    })
    //update counters when a task is added
    updateCounters();
}