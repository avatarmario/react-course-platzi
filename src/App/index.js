import React from 'react';

import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el Curso de Intro a React.js', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALALA', completed: false},
  { text: 'Usar estados derivados', completed: true},

]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1'); */


function App(){
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

  console.log('Log 1');

  /* React.useEffect(() =>{
    console.log('L00000og 2');
  }); */

  /* React.useEffect(() =>{
    console.log('Looooog 2');

  }, [] ); */

  React.useEffect(() =>{
    console.log('Looooog 2');

  }, [totalTodos] );

  console.log('Log 3');


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
    <AppUI
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}

    />
  );
  
}

export default App;
