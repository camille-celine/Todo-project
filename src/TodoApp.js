import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useTodoState from "./hooks/useTodoState";

function TodoApp() {
  const initialTodos = [
    {id: 1, task: "Vaccum", completed: false },
    {id: 2, task: "Clean bathroom", completed: false },
    {id: 3, task: "Wash dishes", completed: false }
  ]

  // Control the state of all the todos 
  const {todos, addTodo, removeTodo, editTodo, toggleTodo} = useTodoState(initialTodos);
  
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      {/* AppBar starts */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* AppBar ends */}
      <Grid container justifyContent="center" style={{marginTop: "1rem"}}>
        <Grid item xs={11} md={8} lg={4} >
          <TodoForm addTodo={addTodo}/>
          <TodoList 
            todos={todos} 
            removeTodo={removeTodo}
            editTodo={editTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;

