import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const useTodoState = initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos, 
    addTodo: newTodoText => {
      setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map( todo => 
        todo.id === todoId ? {...todo, task: newTask} : todo
      );
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map( todo => 
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      );
      setTodos(updatedTodos);
    }
  }
}

export default useTodoState;

