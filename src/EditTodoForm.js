import React from 'react';
import useInputState from "./hooks/useInputState";
import TextField from '@mui/material/TextField';

function EditTodoForm({id, task, editTodo, toggleEditForm}) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form onSubmit={e => {
      e.preventDefault();
      editTodo(id, value);
      toggleEditForm();
      reset();
    }}>
      <TextField 
        value={value} 
        onChange={handleChange} 
        margin="normal"
        label="Add New Todo"
        fullWidth
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm;