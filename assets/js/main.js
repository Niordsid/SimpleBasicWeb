
var todos = [];

/* funcion que agrega la tareas a la primera tabla */
function showTodos(){

  $('#table2').html('');

  for(var i=0; i<todos.length; i++){
    var button= "<button type='button' index="+i+" class='button-todo'> <span class='glyphicon glyphicon-ok'> </span> </button>";
    var todo = "<tr> <td>"+ button+" </td>"+"<td>"+todos[i].name+"</td>"+"<td>"+todos[i].time+"</td>"+"</tr>";


    $('#table2').append(todo);
  }
}

/* funcion que muestra las tareas completas Nota: Falta terminarla*/
function showComplete(){
  $('#completed-todo').html('');



  for(var i=0; i<todos.length; i++){

    if(todos[i].done){

      var complete= "<tr> <td> </td> <td>"+todos[i].name+" </td> <td>"+todos[i].done+" </td> </tr>";
      console.log('Estado=',todos[i].done)
      $('#completed-todo').append(complete);
    }
  }

}
/* funcion que muestra las tareas incompletas Nota: Falta terminarla*/
function showInclomplete(){
  $('#incompleted-todo').html('');

  for(var i=0; i<todos.length; i++){

    if(!todos[i].done){
      var incomplete= "<tr> <td> </td> <td>"+todos[i].name+" </td> <td>"+todos[i].done+" </td> </tr>";

      $('#incompleted-todo').append(incomplete);
      
    }
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



$(document).on('click',".button-todo", function() {
  var index= $(this).attr('index');

  todos[index].done = !todos[index].done;


  showComplete();
  showInclomplete();

 /*if(todos[index].done= false){
    console.log(todos[index].done, todos[index].name);

  }*/


} );
