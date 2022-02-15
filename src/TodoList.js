import React from "react";
import Todo from "./Todo";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo, i) => (
          <>
            <Todo 
              task={todo.task} 
              id={todo.id}
              key={todo.id} 
              completed={todo.completed}
              removeTodo={props.removeTodo}
              editTodo={props.editTodo}
              toggleTodo={props.toggleTodo}
            />
            {i < props.todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;