const todolist = [{
  name:'make dinner' , 
  dueDate: '2025-04-24'
  },{
   name: 'wash dishes',
   dueDate : '2025-04-24'
  }
];

renderTodolist();
function renderTodolist(){
  let todolistHTML = ' ';
  todolist.forEach((todoObject, index) => {
    const { name , dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
     <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todolistHTML += html; 
  });
  document.querySelector('.js-todo-list').innerHTML = todolistHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton , index)=>{
      deleteButton.addEventListener('click',() =>{
        todolist.splice(index, 1);
        renderTodolist();
      });
  });
}
document.querySelector('.js-add-todo-button').addEventListener('click' , () =>{
  addTodo();
});
function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todolist.push({
   // name : name,
    //dueDate : dueDate can be written as 
    name , 
    dueDate
  }
  );
 

  inputElement.value = ' ';

  renderTodolist();
}