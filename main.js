const todos = [
    {
        id: 1,
        text: "Learn JS",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting John",
        isCompleted: false
    }
]
 //Loop through array

 for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
 }


 for (let todo of todos){
    console.log(todo.text)
 } // more simple way to loop through array

 todos.forEach(function(todo){
    console.log(todo.text);
 });  // todos-name of array, todo- name of the variable for each value in the array

 const todoText = todos.map(function(todo){
    return todo.text});

    todos.map(function(todo){
        console.log(todo.text)
    });

    console.log (todoText) //map method of goingh through an array

    const todoCompleted = todos.filter(function(todo){
        return todo.isCompleted === true;
    }).map(function(todo){
        return todo.text
    });
     console.log(todoCompleted) // its so awesome....
     