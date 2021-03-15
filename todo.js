let tasks = [];
let k = 1; 
function newElement(){
    /*let newDiv = document.createElement("div");
    let  task = document.getElementById("toAdd").value;
    let textTask = document.createTextNode(task);
    newDiv.appendChild(textTask);
    document.getElementById("task").appendChild(newDiv);*/

 /*
    let div = document.querySelector('#task');
    let template = document.querySelector('#tempTask');
    let clone = template.content.cloneNode(true);  
    let newEl = clone.querySelectorAll("#newElement");
    //let textTask = document.createTextNode(task);
    let  task = document.getElementById("toAdd").value;
    let textTask = document.createTextNode(task);
    newEl[0].textContent = textTask;

    div.appendChild(clone);*/
    let div = document.querySelector('#task');
    let template = document.querySelector('#tempTask');
    let clone = template.content.cloneNode(true);
    let  task = document.getElementById("toAdd").value;
    clone.querySelector("#task").id= task;
    
    const deleteBtn = clone.querySelector('#trash');
    deleteBtn.addEventListener('click', deleteTask)

    let textTask = document.createTextNode(task);
    let newEl = clone.querySelectorAll("#newElement");
    newEl[0].appendChild(textTask);

    div.appendChild(clone);
}

function deleteTask(){
    this.parentNode.remove();
}

function click(){
    document.addEventListener('click', e=>{
        console.log('di', e.target)
})}