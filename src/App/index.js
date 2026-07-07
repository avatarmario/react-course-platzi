import React from 'react';
import { TodoCounter} from '../TodoCounter';
import { TodoSearch} from '../TodoSearch';
import { TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import './App.css';
import { useLocalStorage } from './useLocalStorage';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el Curso de Intro a React.js', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALALA', completed: false},
  { text: 'Usar estados derivados', completed: true},

]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1'); */


function App() {
  

  // ESTADOS

  // State for: todos
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  // State for: search input
  const [searchValue, setSearchValue] = React.useState('');

  // ESTADOS DERIVADOS 

  // Count: todos completed
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  // Count: total todos
  const totalTodos = todos.length;

  // clase 9: filter todos
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

  // clase 10 completar todos con eventos 
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // clase 10 ¡ eliminar todos con eventos 
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

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

export default App;
