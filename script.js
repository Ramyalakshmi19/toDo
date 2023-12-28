const task=[];
let taskCount=0;
let inputBox=document.getElementById('typeBox')
inputBox.addEventListener("keypress",event=>
{
    if(event.key=="Enter")
    {
        let currTask=inputBox.value;
        task.push(currTask);
        appendTask();
        taskCount+=1;
        inputBox.value='';
    }
})
function appendTask()
{
    let taskDiv=document.createElement('div');
    let checkNode=document.createElement('input');
    checkNode.type="checkbox";
    taskDiv.appendChild(checkNode);

    let node=document.createElement('li');
    let text=document.createTextNode(task[taskCount]);
    node.appendChild(text);
    taskDiv.appendChild(node);
    
    document.getElementById('taskList').appendChild(taskDiv);
}