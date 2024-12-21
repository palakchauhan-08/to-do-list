const inputTask = document.getElementById("input-task")
const addTaskButton = document.getElementById("addTaskBtn")
const deleteTaskButton = document.getElementById("deleteTaskBtn")
const tasksItemsEl = document.getElementById("taskItems")

let tasksList=[]

function renderList(){
    tasksItemsEl.innerHTML = ""
    // for(let i=0; i<tasksItemsEl.length-1;i++){
    //     let newTask = document.createElement('li')
    //     newTask.innerText = tasksList[i]
    //     tasksListEl.appendChild(newTask)

    tasksList.map((value,index,array)=>{
    let newTask = document.createElement('li')
    newTask.innerText = value;
    tasksItemsEl.appendChild(newTask)
    console.log(value,index,array)


})
}

function addTask(){
    tasksList.push(inputTask.value);
    renderList()
}
function deleteTask(){
    tasksList.pop();
    renderList()
}

addTaskButton.addEventListener('click',addTask)
deleteTaskButton.addEventListener('click',deleteTask)


const getData = async function(){
    const response = await fetch('')
}