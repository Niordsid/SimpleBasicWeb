
var todos = [];


function showTodos(){

  $('#table2').html('');

  for(var i=0; i<todos.length; i++){

    var todo = "<tr index=>"+"<td>"+todos[i].done+"</td>"+"<td>"+todos[i].name+"</td>"+"<td>"+todos[i].time+"</td>"+"</tr>";
    

    $('#table2').append(todo);
  }
}

$(document).ready(function(){
  $('#todo-button').click(function(){

    /* Object JSON */
    todo ={
      done: false,
      name:$('#input-todo').val(),
      time:$('#time-task').val()
    };

    todos.push(todo); /* almacenar valor en el array todos */

    showTodos();
  });
});
