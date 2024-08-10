let count=1;

function addtask(){
    let task = document.querySelector('input').value;
    if(task.trim()=='')
    {
        alert('please enter task');
    }
    else{
        let task = document.querySelector('input').value;

        let outerdiv = document.createElement('div');
        outerdiv.className = `task${count} divtask`;

        let innerdiv = document.createElement('div');
        innerdiv.className = `divtaskitem`;
        innerdiv.innerText = task;

        let divbtn = document.createElement('button');
        divbtn.innerText='Remove';
        divbtn.className=`divbtn btnItem${count}`;
        divbtn.addEventListener('click',removeTask);

        innerdiv.append(divbtn);
        outerdiv.append(innerdiv);
        let parentdiv = document.querySelector('.tasks');
        parentdiv.prepend(outerdiv);
       
       
        document.querySelector('input').value='';
        count +=1;
    }
}



const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    addtask();
})


function removeTask(event){
    const button = event.target;
    const taskDiv = button.parentNode.parentNode;
    taskDiv.remove();
}
