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
  for (let i = 0 ; i< todolist.length; i++) {
    const todoObject = todolist[i];
    //const name = todoObject.name; 
    //const dueDate = todoObject.dueDate; can be wriiten in one line as
    const { name , dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
     <button onclick = "
        todolist.splice(${i}, 1);
        renderTodolist();
    " class="delete-todo-button">Delete</button>
    `;
    todolistHTML += html;
  }
  

  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

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