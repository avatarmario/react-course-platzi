import './TodoCounter.css';

function TodoCounter({total, completed}) {
  return (
    <h1 className = "TodoCounter">
      Has completado <span className = "TodoCounter-completed">{completed}</span> de <span className = "TodoCounter-total">{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };