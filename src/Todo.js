import React from 'react';
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({task, id, completed, removeTodo, editTodo}) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <div>
      <ListItem>
        { isEditing ? 
          (<EditTodoForm 
            id={id}
            task={task}
            editTodo={editTodo}
            toggleEditForm={toggle}
          /> )
        : 
        
          (
          <>{/* Todo: id, task, completed */}
            <Checkbox/>
            <ListItemText>{task}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )
        }
      </ListItem>
    </div>
  )
}

export default Todo;
