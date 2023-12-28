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
    let node=document.createElement('li');
    let checkBox=createElement('input');
    checkBox.type="checkbox";
    node.append(checkBox);
    let text=document.createTextNode(task[taskCount]);
    node.appendChild(text);
    document.getElementById('taskList').appendChild(node);
}