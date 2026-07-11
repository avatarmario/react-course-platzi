import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();

function TodoProvider({children}) {
    // ESTADOS

    // State for: todos
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    // State for: search input
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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

    //clas27: add todo
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    };

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

    return(
        <TodoContext.Provider value = {{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo, 
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>

    );
}

export { TodoContext, TodoProvider }
