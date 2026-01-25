const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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
    })
}