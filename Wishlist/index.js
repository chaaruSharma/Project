let todoInput= document.querySelector(".input");
let addTodobutton= document.querySelector(".button");
let showTodos=document.querySelector("todos-container");
let toDo,
todoList=[];


//creating fuction to get unique id

function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' .replace(/[xy]/g, function (param){
        let number=Math.random()*16|0;
        let randomNumber=param=='x'?number:(number& 0x3|0x8);
        return randomNumber.toString(16);
    });
}


addTodobutton.addEventListener("click",(e)=>{
    e.preventDefault();
    toDo=todoInput.value;
    console.log(toDo);
    if (toDo.length>0){
        todoList.push({id: uuid(), toDo: toDo, isCompleted : false});
    }
    renderTodoList(todoList);
});

function renderTodoList(todoList){
    console.log(todoList);
    showTodos.innerHTML=todoList.map(todo=>`<div><input type="checkbox"><label>${todo.todo}</label><button></button></div>`)
}
renderTodoList(todoList);