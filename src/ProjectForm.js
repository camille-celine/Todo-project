import React from 'react';
import useInputState from "./hooks/useInputState";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function ProjectForm({addProject}) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
      <form onSubmit={e => {
        e.preventDefault();
        addProject(value);
        reset();
      }}>
        <TextField 
          value={value} 
          onChange={handleChange} 
          margin="normal"
          label="Add New Project"
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default ProjectForm;