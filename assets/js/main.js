var todos=[];

function showTodos(){


  for(var i=0; i<todos.length; i++){

    var todo = "<tr>"+"<td>1</td>"+"<td>"+todos[i]+"</td>"+"<td>6 hours</td>"+"</tr>";
    console.log(todo);
  
    $('#table2').append(todo);
 }
}

$(document).ready(function(){
  $('#todo-button').click(function(){
    todos.push($('#input-todo').val()); /* almacenar valor en el array todos */
    $('#input-todo').val("");
    console.log(todos);
    showTodos();
  });
});
