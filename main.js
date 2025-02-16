let inputTask = document.getElementById("input-task");
let addTaskBtn = document.getElementById("add-task");
task = [];

addTaskBtn.addEventListener("click",addTask)


function addTask(){
    let taskValue = inputTask.value

    task.push(taskValue)

    console.log(task)
    render();
}


function render(){
    let resultHTML = "";
    for (let i=0;i<task.length;i++){
        resultHTML += `<div class="task">
            <div>${task[i]}</div>
            <div>
                <button>Check</button>
                <button>Delete</button>
            </div>
        </div>`
    }

document.getElementById("task-board").innerHTML=resultHTML;
}