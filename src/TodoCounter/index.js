import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h1 className = "TodoCounter">
      Has completado <span className = "TodoCounter-completed">{completedTodos}</span> de <span className = "TodoCounter-total">{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };