let inputTask = document.getElementById("input-task");
let addTaskBtn = document.getElementById("add-task");
taskList = [];

addTaskBtn.addEventListener("click",addTask)


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
    let resultHTML = "";
    for (i=0;i<taskList.length;i++){
        if (taskList[i].isComplete == true){
            resultHTML += `<div class="task task-done">
            <div class="task-item">${taskList[i].taskValue}</div>
            <div>
                <button onclick="completeTask('${taskList[i].id}')"><i class="fa-solid fa-repeat"></i></button>
                <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>`
        } else {
            resultHTML += `<div class="task">
            <div>${taskList[i].taskValue}</div>
            <div>
                <button onclick="completeTask('${taskList[i].id}')"><i class="fa-regular fa-circle-check"></i></button>
                <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>`
        }

    }

document.getElementById("task-board").innerHTML=resultHTML;
}

function completeTask(id){
    for(i=0;i<taskList.length;i++){
        if (taskList[i].id==id){
            taskList[i].isComplete = !taskList[i].isComplete;
        }
    }
    console.log("completeTask()",taskList)
    render();
}

function deleteTask(id){
    for(i=0;i<taskList.length;i++){
        if (taskList[i].id==id){
            taskList.splice(i,1)
        }
    }
    render();
}


function randomIDgenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}