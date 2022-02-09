import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Todo from './Todo';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// Control the state of all the todos 

function TodoApp() {
  const initialTodo = {id: 1, task: "Vaccum", completed: false }
  const [todos, setTodos] = useState(initialTodo);
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

      <TodoForm/>
      <TodoList todos={todos}/>
    </Paper>
  )
}

export default TodoApp;

