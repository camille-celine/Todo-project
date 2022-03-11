import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Paper from '@mui/material/Paper';
import useTodoState from "./hooks/useTodoState";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';

function Project(props) {
  const initialTodos = [
    {id: 1, task: "Vaccum", completed: false },
    {id: 2, task: "Clean bathroom", completed: false },
    {id: 3, task: "Wash dishes", completed: false }
  ]

  // Control the state of all the todos 
  const {todos, addTodo, removeTodo, editTodo, toggleTodo} = useTodoState(initialTodos);

  return(
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        width: "100%",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <ListItem sx={{ justifyContent: "center" }}>
        <h2>{props.name}</h2>
        <IconButton onClick={() => props.removeProject(props.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Box component="main" sx={{ flexGrow: 1 }}>
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
      </Box>
    </Paper>
  )
}

export default Project;