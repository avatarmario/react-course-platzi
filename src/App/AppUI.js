import { TodoCounter} from '../TodoCounter';
import { TodoSearch} from '../TodoSearch';
import { TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import './App.css';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){
return (
    <main className = "TodoApp">
      <TodoCounter
        completed = {completedTodos} 
        total = {totalTodos}
      />
      <TodoSearch
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />

      <TodoList>
        {loading && <p> Estamos cargando....</p>}
        {error && <p> Desespérate. hubo un error!!</p>}
        {(!loading && searchedTodos.length === 0 ) && <p> crea tu primer todo! </p>}

        {searchedTodos.map(todo => (
          <TodoItem 
            key = {todo.text} 
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </main>
  );

}

export { AppUI };

