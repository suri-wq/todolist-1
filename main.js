let inputTask = document.getElementById("input-task");
let addTaskBtn = document.getElementById("add-task");
let taskTabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let filterList = [];
let taskStatus = 'all';

addTaskBtn.addEventListener("click",addTask)

for (let i=1;i<taskTabs.length;i++){
    taskTabs[i].addEventListener("click",function(event){
        filterTask(event);
    })
}



function addTask(){
    let task = {
        id : randomIDgenerate(),
        taskValue : inputTask.value,
        isComplete : false
    }
    taskList.push(task)

    console.log("taskValue",task.taskValue)
    console.log("addTask(), taskList", taskList)
    render();
}


function render(){
    let list = [];
    if (taskStatus == "all"){
        list = taskList;
    } else {
        list = filterList;
    }
    let resultHTML = "";
    
    for (let i=0;i<list.length;i++){
        if (list[i].isComplete == true){
            resultHTML += `<div class="task task-done">
            <div class="task-item">${list[i].taskValue}</div>
            <div>
                <button onclick="completeTask('${list[i].id}')"><i class="fa-solid fa-repeat"></i></button>
                <button onclick="deleteTask('${list[i].id}')"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>`
        } else {
            resultHTML += `<div class="task">
            <div>${list[i].taskValue}</div>
            <div>
                <button onclick="completeTask('${list[i].id}')"><i class="fa-regular fa-circle-check"></i></button>
                <button onclick="deleteTask('${list[i].id}')"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>`
        }

    }

document.getElementById("task-board").innerHTML=resultHTML;
}

function completeTask(id){
    for(let i=0;i<taskList.length;i++){
        if (taskList[i].id==id){
            taskList[i].isComplete = !taskList[i].isComplete;
        }
    }
    console.log("completeTask()",taskList)
    render();
}

function deleteTask(id){
    for(let i=0;i<taskList.length;i++){
        if (taskList[i].id==id){
            taskList.splice(i,1)
        }
    }
    render();
}

function filterTask(event){
    taskStatus = event.target.id
    filterList = [];
    if (taskStatus === "all"){
        render();
    } else if(taskStatus === "ongoing"){
        for (let i=0;i<taskList.length;i++){
            if(taskList[i].isComplete === false){
                filterList.push(taskList[i])
            }
        }
        render();

    } else {
        for (let i=0;i<taskList.length;i++){
            if(taskList[i].isComplete === true){
                filterList.push(taskList[i])
            }
        }
        render();
    }
}


function randomIDgenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}