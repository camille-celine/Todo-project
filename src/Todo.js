import React from 'react';
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function Todo({task, id, completed, removeTodo, editTodo}) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <div>
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
          {task}
          <button onClick={() => removeTodo(id)}>delete</button>
          <button onClick={toggle}>Edit</button>
        </>
      )
      }
    </div>
  )
}

export default Todo;
